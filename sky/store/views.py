from django.shortcuts import render,redirect
from rest_framework import viewsets,permissions,status
from rest_framework.views import APIView
from django.contrib.auth import login, authenticate, get_user_model,logout
from django.contrib import messages
from .forms import UsersForm,LoginForm,BusForm,DestinationForm
from.serializer import UsersSerializer, UserRegisterSerializer
from django.http import HttpResponse,HttpRequest
from .models import Users,Availability,Schedule
from django.urls import reverse
from django.contrib.auth.hashers import make_password, check_password


class UserView(viewsets.ModelViewSet):
    serializer_class=UsersSerializer
    queryset = Users.objects.all()
class UserRegister(APIView):
    permission_class=(permissions.AllowAny,)
    def post(self, request):
        clean_data=request.data
        serializer=UserRegisterSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user=serializer.create(clean_data)
            if user:
                return HttpResponse(serializer.data,status=status.HTTP_201_CREATED)
        return HttpResponse(status=status.HTTP_400_BAD_REQUEST)
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


