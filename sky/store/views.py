from django.shortcuts import render, redirect, get_object_or_404
from rest_framework import viewsets, permissions, status,generics
from rest_framework.views import APIView
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from .forms import UsersForm, LoginForm, BusForm, DestinationForm
from .serializer import UsersSerializer, UserRegisterSerializer, BookingE, UserLoginSerializer,BusSerializer,ScheduleSerializer,BookingSerializer,ScheduleSerializer1,UsersSerializer1,UserCreateSerializer,UserUpdateSerializer,BookingSerializer1,CancleSerializer
from django.http import HttpResponse, HttpRequest
from .models import Users, Availability, Schedule, CustomUser,Bus,Booking,Canclerequest
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
from rest_framework.decorators import action
from django.http import JsonResponse
import requests
from  datetime import datetime
import paypalrestsdk
from paypalrestsdk import Payment
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode

class PasswordResetTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (
            str(user.pk) + str(timestamp) + str(user.is_active)
        )

password_reset_token = PasswordResetTokenGenerator()

paypalrestsdk.configure({
    "mode": settings.PAYPAL_MODE,
    "client_id": settings.PAYPAL_CLIENT_ID,
    "client_secret": settings.PAYPAL_CLIENT_SECRET
})
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
   
        return Response(booked_seats)
class BookedSeat(viewsets.ModelViewSet):
    serializer_class=BookingSerializer1
    def get_queryset(self):
        schede=self.request.query_params.get('schedule',None)
        if schede is not None:
            booked_seats = Booking.objects.filter(schedule=schede)
            return booked_seats
        else:
            return Booking.objects.none()
class Bookingview(viewsets.ModelViewSet):
    queryset=Booking.objects.all()
    serializer_class=BookingE
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
def Cancle(request):
    bookig=request.data.get('bookingId')
    print(bookig)
    try:
        book=Booking.objects.get(booking_id=bookig)  
    except  Booking.DoesNotExist:
        return Response({'message':'bokking doesnot exist.'})  
    Canclerequest.objects.create(
        bookingid=book
    )
    return Response({'message': 'canclation request submited.'}, status=status.HTTP_201_CREATED)
class Cancleview(viewsets.ModelViewSet):
    queryset=Canclerequest.objects.all()
    serializer_class= CancleSerializer
@api_view(['POST'])
def increment_available_seats(request):
    schedule_id = request.data.get('schedule_id')
    try:
        schedule = Schedule.objects.get(pk=schedule_id)
        schedule.available_seats += 1
        schedule.save()
        return Response({'message': 'Available seats incremented successfully'}, status=200)
    except Schedule.DoesNotExist:
        return Response({'message': 'Schedule not found'}, status=404)
@api_view(['POST'])
def book_bus_seat(request):
    # Assuming the request data contains 'customer_id', 'bus_id', and 'seat_number'
    customer_id = request.data.get('customer_id')
    seat_number = request.data.get('seat_number')
    schedule=request.data.get('schedule')
    try:
        customer = CustomUser.objects.get(id=customer_id)
        schedule=Schedule.objects.get(id=schedule)
    except CustomUser.DoesNotExist:
        return Response({'message': 'Customer does not exist.'}, status=status.HTTP_400_BAD_REQUEST)


    # Fetch the booking details
    booking = Booking.objects.create(
        schedule=schedule,
        customer_id=customer,
        seat_number=seat_number
    )

    # Decrease available seats of the bus in the schedule
    try:
        
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
@api_view(['POST'])
def sendDeclien(request):
    email = request.data.get('email')
    send_email_message(email)
    return Response({"message": "eamil message sent to the user."})
def send_email_message(email):
    subject = 'Email message for cancle request'
    message = f'your request is not accepted becuase of time'
    send_mail(subject, message, 'mintesnotAyele@example.com', [email])

@api_view(['POST'])
def sendAprove(request):
    email = request.data.get('email')
    send_aprove_email_message(email)
    return Response({"message": "eamil message sent to the user."})
def send_aprove_email_message(email):
    subject = 'Email message for cancle request'
    message = f'your request is accepted check your account'
    send_mail(subject, message, 'mintesnotAyele@example.com', [email])
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
@api_view(['POST'])
def chappa(request):
    try:
        now=datetime.now()
        pp = request.data.get('price')
        mm=request.data.get('userId')
        ddt= now.strftime("%Y%m%d%H%M%S")
        url = "https://api.chapa.co/v1/transaction/initialize"
        payload = {
            "amount": pp,
            "currency": "ETB",
            "email": "alu@gmail.com",
            "first_name": "alu",
            "last_name": "lulu",
            "phone_number": "0933205652",
            "tx_ref": f'tx_{mm}{ddt}',
            "callback_url": "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
            "return_url": "http://localhost:3000",
            "customization": {
                "title": "ayy",
                "description": "it"
            }
        }
        headers = {
            'Authorization': 'Bearer CHASECK_TEST-M4Cw1oetgc8wNhMmVs0amV0upJmNXX94',
            'Content-Type': 'application/json'
        }

        response = requests.post(url, json=payload, headers=headers)
        data = response.text
        print(data)
          # Log the URL for debugging

        # Extract the relevant information from the response
        data = response.json()
        status_code = response.status_code

        # Construct and return a DRF Response object
        return Response(data, status=status_code)
    except Exception as e:
        return Response({'message': 'Internal Server Error'}, status=500)
@api_view(['POST'])
def paypal_payment(request):
    try:
        # Get the payment amount from the request
        amount = request.data.get('price')

        # Create a PayPal Payment object
        payment = paypalrestsdk.Payment({
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "transactions": [
                {
                    "amount": {
                        "total": amount,
                        "currency": "USD"
                    }
                }
            ],
            "redirect_urls": {
                "return_url": "http://localhost:3000",
                "cancel_url": "http://localhost:3000/adminpage"
            }
        })
        print(payment.create())
       # payment_id = "PAYID-MYLZ6QY5B299006KT3606119"
        #payer_id = "UYU297GKV4YN4"
        #payment = Payment.find(payment_id)
        #payment_details = Payment.find(payment_id)
        #print(payment_details.to_dict())
        # Create the payment
        if payment.create():
            request.session['paymentId'] = payment.id
            # Get the approval URL from the payment object
            approval_url = None
            for link in payment.links:
                if link.method == "REDIRECT":
                    approval_url = link.href
                    break

            if approval_url:
                return JsonResponse({'redirect_url': approval_url})
            else:
                return JsonResponse({'error': 'Approval URL not found'}, status=500)
        else:
            error_message = payment.error.get('message', 'Unknown error')
            return JsonResponse({'error': error_message}, status=500)
    except Exception as e:
        return JsonResponse({'message': str(e)}, status=500)
@api_view(['POST'])
def forgot_password(request):
    email = request.data.get('email')
    user = CustomUser.objects.filter(email=email).first()
    if user:
        # Generate a password reset token
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = password_reset_token.make_token(user)
        
        # Encode user ID and token to be sent in the password reset link
        reset_link = f'http://localhost:3000/reset-password/{uid}/{token}/'  # Replace with your frontend URL
        
        # Send the password reset link to the user's email
        send_mail(
            'Password Reset',
            f'Click the link below to reset your password:\n{reset_link}',
            'from@example.com',
            [email],
            fail_silently=False,
        )
        return Response({'message': 'Password reset link sent to your email'}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def reset_password(request, uidb64, token):
    try:
        uid = urlsafe_base64_decode(uidb64).decode()  # Decode the byte-like object to a string
        user = CustomUser.objects.get(pk=uid)
        if password_reset_token.check_token(user, token):
            new_password = request.data.get('new_password')
            user.set_password(new_password)
            user.save()
            return Response({'message': 'Password reset successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
    except CustomUser.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
   
