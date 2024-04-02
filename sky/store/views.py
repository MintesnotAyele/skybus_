from django.shortcuts import render, redirect, get_object_or_404
from rest_framework import viewsets, permissions, status,generics
from rest_framework.views import APIView
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from .forms import UsersForm, LoginForm, BusForm, DestinationForm
from .serializer import UsersSerializer, UserRegisterSerializer, UserLoginSerializer,BusSerializer,ScheduleSerializer,BookingSerializer,ScheduleSerializer1,UsersSerializer1,UserCreateSerializer,UserUpdateSerializer
from django.http import HttpResponse, HttpRequest
from .models import Users, Availability, Schedule, CustomUser,Bus,Booking
from django.urls import reverse
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authentication import SessionAuthentication
from .validations import custom_validation, validate_email, validate_password
from django.core.mail import send_mail
from django.conf import settings

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UsersSerializer
class AddBus(viewsets.ModelViewSet):
    queryset=Bus.objects.all()
    serializer_class=BusSerializer
class Scheduleview(viewsets.ModelViewSet):
    queryset = Schedule.objects.select_related('busPlateNumber').all().order_by('date')
    serializer_class=ScheduleSerializer
class Scheduleview1(viewsets.ModelViewSet):
    queryset=Schedule.objects.select_related('busPlateNumber').all().order_by('date')
    serializer_class=ScheduleSerializer
def home(request):
    return render(request, "store/index.html")
class SearcheSchedule(viewsets.ModelViewSet):
    serializer_class = ScheduleSerializer

    def get_queryset(self):
        searched_destination = self.request.query_params.get('destination', None)
        if searched_destination is not None:
            return Schedule.objects.select_related('busPlateNumber').filter(destination=searched_destination).order_by('time')[:1]
        else:
            return Schedule.objects.none()
class Bookingview(viewsets.ModelViewSet):
    queryset=Booking.objects.all()
    serializer_class=BookingSerializer
@api_view(['POST'])
def addSchedlue(request):
    busPlateNumber=request.data.get('busPlateNumber')
    date=request.data.get('date')
    destination=request.data.get('destination')
    time=request.data.get('time')
    price=request.data.get('price')
    available_seats = request.data.get('available_seats')
    try:
        
        buss=Bus.objects.get(palte_number=busPlateNumber)
    except Bus.DoesNotExist:
        return Response({'message': 'bus does not exist.'}, status=status.HTTP_400_BAD_REQUEST)
    sechedule = Schedule.objects.create(
        busPlateNumber=buss,
        date=date,
        destination=destination,
        time=time,
        price=price,
        available_seats=available_seats   
    )
    return Response({'message': 'schedule added successfully.'}, status=status.HTTP_201_CREATED)
    
@api_view(['POST'])
def book_bus_seat(request):
    # Assuming the request data contains 'customer_id', 'bus_id', and 'seat_number'
    customer_id = request.data.get('customer_id')
    bus_id = request.data.get('bus')
    seat_number = request.data.get('seat_number')
    try:
        customer = CustomUser.objects.get(id=customer_id)
        buss=Bus.objects.get(id=bus_id)
    except CustomUser.DoesNotExist:
        return Response({'message': 'Customer does not exist.'}, status=status.HTTP_400_BAD_REQUEST)


    # Fetch the booking details
    booking = Booking.objects.create(
        customer_id=customer,
        bus=buss,
        seat_number=seat_number
    )

    # Decrease available seats of the bus in the schedule
    try:
        schedule = Schedule.objects.get(busPlateNumber=bus_id)
        schedule.available_seats -= 1
        if schedule.available_seats == 0:
            # If available seats become zero, delete the bus schedule
            schedule.delete()
        else:
            schedule.save()
    except Schedule.DoesNotExist:
        # Handle case where schedule does not exist for the bus
        pass

    return Response({'message': 'Bus seat booked successfully.'}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def signup(request):
    serializer = UserCreateSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(request.data['password'])
        user.is_active = False  # User is inactive until email is verified
        user.save()

        # Generate and send verification token via email
        verification_token = Token.objects.create(user=user)
        send_verification_email(user.email, verification_token.key)

        return Response({"message": "User created. Please check your email for verification instructions."})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def send_verification_email(email, token):
    subject = 'Email Verification'
    message = f'Please click the following link to verify your email: http://127.0.0.1:8000/verify-email/{token}/'
    send_mail(subject, message, 'from@example.com', [email])
@api_view(['GET'])
def verify_email(request, token):
    try:
        token_obj = Token.objects.get(key=token)
        user = token_obj.user
        if not user.is_active:
            user.is_active = True
            user.save()
            return Response({"message": "Email verified successfully. You can now login."})
        else:
            return Response({"message": "Email is already verified."}, status=status.HTTP_400_BAD_REQUEST)
    except Token.DoesNotExist:
        return Response({"message": "Invalid or expired token."}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    user = get_object_or_404(CustomUser, email=request.data['email'])
    serializer = UsersSerializer(instance=user)
    if not user.check_password(request.data['password']):
        print("yesssdnooo")
        return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user =user)
        # If not superuser, redirect to customer React page
    return Response({"token": token.key, "user": serializer.data})
class Logout(APIView):
    def post(self, request, format=None):
        # Get the token from the request headers
        token = request.headers.get('Authorization').split(' ')[1]

        # Delete the token from the database
        try:
            Token.objects.get(key=token).delete()
        except Token.DoesNotExist:
            return Response({"detail": "Invalid token."}, status=status.HTTP_400_BAD_REQUEST)

        return Response({"detail": "Successfully logged out."}, status=status.HTTP_200_OK)
class UserRegister(APIView):
    def post(self, request):
        clean_data = custom_validation(request.data)
        serializer = UserRegisterSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(clean_data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
    def post(self, request):
        data = request.data
        assert validate_email(data)
        assert validate_password(data)
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            
            user = serializer.check_user(data)
            print("no")
            login(request._request, user)  # Access the Django HttpRequest using request._request
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)

# You might want to remove authentication from UserLogout as well
class UserLogout(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

# You might want to remove authentication from UserView as well
class UserView(APIView):
    def get(self, request):
        serializer = UsersSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)
    
class Adminuserview(generics.RetrieveAPIView):
    queryset=CustomUser.objects.all()
    serializer_class=UsersSerializer
class Adminuserupdate(generics.UpdateAPIView):
    queryset=CustomUser.objects.all()
    serializer_class=UserUpdateSerializer
class Adminuserdelet(generics.RetrieveDestroyAPIView):
    queryset=CustomUser.objects.all()
    serializer_class=UsersSerializer

