from django.shortcuts import render, redirect, get_object_or_404
from rest_framework import viewsets, permissions, status,generics
from rest_framework.views import APIView
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from .serializer import UsersSerializer, ProfileSerializer,FeedbackSerializer,UserRegisterSerializer,PaymentSerializer, BookingE, UserLoginSerializer,BusSerializer,ScheduleSerializer,BookingSerializer,ScheduleSerializer1,UsersSerializer1,UserCreateSerializer,UserUpdateSerializer,BookingSerializer1,CancleSerializer
from django.http import HttpResponse, HttpRequest
from .models import  Availability,Feedback, Schedule, CustomUser,Bus,Booking,Canclerequest,Payment,Profile
from django.urls import reverse
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authentication import SessionAuthentication
from .validations import custom_validation, validate_email, validate_password
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils import timezone
from django.conf import settings
from rest_framework.decorators import action
from django.http import JsonResponse
import requests
from  datetime import datetime
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
import uuid
from django.views import View
from channels.layers import get_channel_layer

class PasswordResetTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (
            str(user.pk) + str(timestamp) + str(user.is_active)
        )

password_reset_token = PasswordResetTokenGenerator()

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UsersSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)
class AddBus(viewsets.ModelViewSet):
    queryset=Bus.objects.all()
    serializer_class=BusSerializer
class Feedbackview(viewsets.ModelViewSet):
    queryset=Feedback.objects.all()
    serializer_class=FeedbackSerializer
class profileview(viewsets.ModelViewSet):
    queryset=Profile.objects.all()
    serializer_class=ProfileSerializer
  
    def update(self, request, *args, **kwargs):
        # Call the update_balance method for PATCH requests
        try:
            # Get the user's profile
            instance = self.get_object()
            user = instance.user
            user1=CustomUser.objects.get(id=user)
            profile = Profile.objects.get(user=user1)

            # Get the amount to subtract from the balance (passed in the request data)
            amount = int(request.data.get('balance'))

            # Subtract the amount from the balance
            profile.balance += amount
            if profile.balance <= 0:
                profile.balance=2000
                profile.save()
            profile.save()

            return Response({'message': 'Balance updated successfully'})
        except Profile.DoesNotExist:
            return Response({'error': 'User profile not found'}, status=404)
        except Exception as e:
            return Response({'error': str(e)}, status=500)
        

class Scheduleview1(viewsets.ModelViewSet):
    queryset = Schedule.objects.select_related('busPlateNumber').all().order_by('date')
    serializer_class = ScheduleSerializer
class Scheduleview(viewsets.ModelViewSet):
    queryset = Schedule.objects.all().order_by('date')
    serializer_class = ScheduleSerializer1

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        bus_plate_number = instance.busPlateNumber.palte_number

        try:
            bus = Bus.objects.get(palte_number=bus_plate_number)
        except Bus.DoesNotExist:
            return Response({'message': 'Bus with this plate number does not exist.'}, status=status.HTTP_400_BAD_REQUEST)

        # Modify the request data to exclude the busPlateNumber field
        request_data = request.data.copy()
        request_data.pop('busPlateNumber', None)

        serializer = self.get_serializer(instance, data=request_data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save(busPlateNumber=bus)

        return Response(serializer.data)
class Scheduleview3(viewsets.ModelViewSet):
    queryset = Schedule.objects.all().order_by('date')
    serializer_class = ScheduleSerializer1

    def update(self, request, *args, **kwargs):
        sche=Schedule.objects.get(id=request.data['id'])
        schedule = Schedule.objects.get(pk=sche)
        schedule.available_seats ==-1
        schedule.save()
        return Response({'message': 'Available seats Updated successfully'}, status=200)
def home(request):
    return render(request, "store/index.html")
class SearcheSchedule(viewsets.ModelViewSet):
    serializer_class = ScheduleSerializer

    def get_queryset(self):
        searched_destination = self.request.query_params.get('destination', None)
        if searched_destination is not None:
           
            return Schedule.objects.select_related('busPlateNumber').filter(destination=searched_destination, available_seats__gt=0).order_by('time')[:1]
        else:
            return Schedule.objects.none()
class SearcheSchedule2(viewsets.ModelViewSet):
    serializer_class = ScheduleSerializer

    def get_queryset(self):
        searched_destination = self.request.query_params.get('id', None)
        if searched_destination is not None:
           
            return Schedule.objects.select_related('busPlateNumber').filter(id=searched_destination)
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
class BookedSeat1(viewsets.ModelViewSet):
    queryset=Booking.objects.all()
    serializer_class = BookingE
    
    def get_queryset(self):
        user = self.request.query_params.get('customer_id', None)
        print (user)
        if user is not None:
            last_booked_seat = Booking.objects.filter(customer_id=user).order_by('booking_date').last()
            print(last_booked_seat)
            return Booking.objects.filter(pk=last_booked_seat.pk) if last_booked_seat else Booking.objects.none()
        else:
            return Booking.objects.none()

class Bookingview(viewsets.ModelViewSet):
    queryset=Booking.objects.all()
    serializer_class=BookingE

class Bookingview1(viewsets.ModelViewSet):
    queryset=Booking.objects.all()
    serializer_class=BookingE
    def get_queryset(self):
        bus = self.request.query_params.get('plate_number', None)
        if bus is not None:
            bus1=Bus.objects.get(palte_number=bus)
            sche=Schedule.objects.filter(busPlateNumber=bus1,available_seats=0).order_by('time').first()
            sche.available_seats=-1
            sche.save()
            print(sche)
            if sche is not None:
                book=Booking.objects.filter(schedule=sche).all()
                return book
        else:
            return Booking.objects.none()
        sched=Schedule.objects.filter(available_seats=0).order_by('time').first()
        if sched is not None:
            book=Booking.objects.filter(schedule=sched).all()
            return book
        else:
            return Booking.objects.none()
       

         
    
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
import asyncio
@api_view(['POST'])
def Cancle(request):
    admin_user = CustomUser.objects.filter(is_superuser=True).first()
    admin_email = admin_user.email
    bookig=request.data.get('bookingId')
    email=request.data.get('email')
    try:
        user=CustomUser.objects.get(email=email)
    except CustomUser.DoesNotExist:
        return Response({'message': 'user does not exist.'}, status=status.HTTP_400_BAD_REQUEST)
    print(bookig)
    try:
        book=Booking.objects.get(booking_id=bookig)  
    except  Booking.DoesNotExist:
        return Response({'message':'bokking doesnot exist.'})  
    userbook=Booking.objects.filter(customer_id=user)
    print(userbook)
    if book not in userbook:
        return Response({'message':'you are not allowed to cancle this booking.'})
    Canclerequest.objects.create(
        bookingid=book
    )
    subject = 'Notification'
    message = 'This is a notification for the admin there is a canclation request please check it.'
    email_from = 'ayelemintesnot77@gmail.com'
    recipient_list = [admin_email]
    send_mail(subject, message, email_from, recipient_list)
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
def updateprofile(request):
    user = request.data.get('userId')
    try:
        pro = Profile.objects.get(user=user)
        amount = int(request.data.get('balance'))

            # Subtract the amount from the balance
        pro.balance += amount
        if pro.balance <= 0:
            pro.balance=2000
            pro.save()
        pro.save()
        return Response({'message': 'Balance updated successfully'})
    except Profile.DoesNotExist:
        return Response({'error': 'User profile not found'}, status=404)
@api_view(['GET'])
def book_bus(request):
    customer_id = request.data.get('customer_id')
    try:
        customer = CustomUser.objects.get(id=customer_id)
    except CustomUser.DoesNotExist:
        return Response({'message': 'Customer does not exist.'}, status=status.HTTP_400_BAD_REQUEST)
    
    
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
        
        schedule.save()
    except Schedule.DoesNotExist:
        # Handle case where schedule does not exist for the bus
        pass

    return Response({'message': 'Bus seat booked successfully.','booking_id': booking.booking_id},status=status.HTTP_201_CREATED)

@api_view(['POST'])
def signup(request):
    serializer = UserCreateSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(request.data['password'])
        user.is_active = False 
        print(user) # User is inactive until email is verified
        user.save()
        payment = Profile.objects.create(
            user=user,
            balance=500
            
        )
        # Generate and send verification token via email
        verification_token = Token.objects.create(user=user)
        send_verification_email(user.email, verification_token.key)

        return Response({"message": "User created. Please check your email for verification instructions."})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def send_verification_email(email, token):
    subject = 'Email Verification'
    message = f'Please click the following link to verify your email: http://127.0.0.1:3000/verifiy/{token}/'
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
@api_view(['POST'])
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
    if user.is_active:

       if not user.check_password(request.data['password']):
          print("yesssdnooo")
          return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
       token, created = Token.objects.get_or_create(user =user)
        # If not superuser, redirect to customer React page
       return Response({"token": token.key, "user": serializer.data})
    return Response({"detail":"user is not active user first activate it"})
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
        serializer = UsersSerializer1(request.user)
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
class Paymentview(viewsets.ModelViewSet):
    queryset=Payment.objects.all()
    serializer_class=PaymentSerializer
@api_view(['POST'])
def chappa(request):
    try:
        now = datetime.now()
        pp = request.data.get('price')
        mm = request.data.get('customer_id')
        first_name=request.data.get('first_name')
        last_name=request.data.get('last_name')
        email=request.data.get('email')
        book=request.data.get('book')
        booking=Booking.objects.get(booking_id=book)
        print(booking)
        reference = str(uuid.uuid4())
        user = CustomUser.objects.get(id=mm)
        ddt = now.strftime("%Y%m%d%H%M%S")
        payment = Payment.objects.create(
            booking=booking,
            user=user,
            amount_paid=pp,
            transaction_id=reference,
        )
        url = "https://api.chapa.co/v1/transaction/initialize"
        payload = {
            "amount": pp,
            "currency": "ETB",
            "email": email,
            "first_name":first_name,
            "last_name": last_name,
            "phone_number": "0933205652",
            "tx_ref": reference,
            "callback_url": "http://localhost:8000/chapa-callback/",
            "return_url": "http://localhost:3000/admins/approvedticket",
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

        # Extract the relevant information from the response
        data = response.json()
        status_code = response.status_code

        # Construct and return a DRF Response object
        return Response(data, status=status_code)
    except Exception as e:
        return Response({'message': 'Internal Server Error'}, status=500)

class ChapaCallbackView(View):
    def get(self, request):
        data = request.GET
        reference = data.get("trx_ref")
        print(reference)

        # Find the payment by reference
        try:
            payment = Payment.objects.get(transaction_id=reference)
            admin=CustomUser.objects.filter(is_superuser=True).first()
            email=admin.email
            user=payment.user
            name=user.username
            subject="Payment Notification"
            message=f"User {name} has been made a payment of {payment.amount_paid} to book a ticket. Thank you!!."
            send_mail(subject,message,'ayelemintesnot77@gmail.com', [email])
            # Send an email to the admin

        except Payment.DoesNotExist:
            return JsonResponse({"error": "Payment not found"}, status=404)

        if data.get("status") == "success":
            payment.payment_status = "successful"
        else:
            payment.payment_status = "failed"

        payment.save()

        return JsonResponse({"message": "Payment status updated"})



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
@api_view(['POST'])
def sendReminder(request):
    schedule = request.data.get('id')
    bookings = Booking.objects.filter(schedule_id=schedule)
    print(bookings)
    for booking in bookings:
            send_reminder_email(booking.customer_id.email, booking.schedule)
    return Response({"message": "eamil message sent to the user."})
def send_reminder_email(user_email, schedule_details):
    subject = 'Reminder: Bus Schedule Starting Soon'
    print(schedule_details)
    message = f'your bus ' + schedule_details.busPlateNumber.palte_number + ' is starting in 15 minutes'
    send_mail(subject, message, 'ayelemintesnot77@gmail.com', [user_email])
    print('yess')
