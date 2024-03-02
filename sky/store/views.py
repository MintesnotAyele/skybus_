from django.shortcuts import render,redirect
from rest_framework import viewsets,permissions,status
from rest_framework.views import APIView
from django.contrib.auth import login, authenticate,logout
from django.contrib import messages
from .forms import UsersForm,LoginForm,BusForm,DestinationForm
from.serializer import UsersSerializer
from django.http import HttpResponse,HttpRequest
from .models import Users,Availability,Schedule
from django.urls import reverse
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['POST'])
def login1(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(email=email, password=password)
    if user:
        return Response({'message': 'Login successful'})
    else:
        return Response({'message': 'Invalid username or password'}, status=401)
class UserView(viewsets.ModelViewSet):
    serializer_class=UsersSerializer
    queryset = Users.objects.all()
def home(request):
    return render(request,"store/index.html")
def signup(request) :
    if request.method == 'POST':
        form = UsersForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'store/success.html')
    else:
        form = UsersForm()
    return render(request,"store/signup.html" , {'form': form})
def signin(request):
    return  render(request,'store/login.html')


def login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            try:
                user = Users.objects.get(username=username)
                if (password==user.password):
                    # Authentication successful
                    # You can implement session handling here
                    return redirect('desti')  # Redirect to home page after login
                else:
                    # Authentication failed
                    error_message = "Invalid username or password."
                    return render(request, 'store/login.html', {'form': form, 'error_message': error_message})
            except Users.DoesNotExist:
                # User does not exist
                error_message = "Invalid username or password."
                return render(request, 'store/login.html', {'form': form, 'error_message': error_message})
    else:
        form = LoginForm()
    return render(request, 'store/login.html', {'form': form})
def add_bus(request):
    if request.method == 'POST':
        form = BusForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')  # Redirect to a success page
    else:
        form = BusForm()
    return render(request, 'store/add_bus.html', {'form': form})
def display_availabilities(request):
    availabilities = Availability.objects.select_related('bus', 'schedule').filter(available_seats__gt=0)
    return render(request, 'store/availabilities.html', {'availabilities': availabilities})


def search_bus(request):
    if request.method == 'POST':
        form = DestinationForm(request.POST)
        if form.is_valid():
            destination = form.cleaned_data['destination']
            # Query to get the bus id with the destination and smallest date
            schedule = Schedule.objects.filter(destination=destination).order_by('time').first()
            if schedule:
                # Get the bus plate number directly from the Bus table
                bus_plate_number = schedule.busPlateNumber
                return render(request, 'store/bus_search_result.html', {'bus_plate_number': bus_plate_number})
            else:
                return render(request, 'store/bus_search_result.html', {'error_message': 'No bus found for the destination'})
    else:
        form = DestinationForm()
    return render(request, 'store/destination_form.html', {'form': form})


