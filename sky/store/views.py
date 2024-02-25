from django.shortcuts import render,redirect
from rest_framework import viewsets
from django.contrib.auth import login, authenticate, get_user_model,logout
from django.contrib import messages
from .forms import UsersForm,LoginForm,BusForm
from.serializer import UsersSerializer
from django.http import HttpResponse,HttpRequest
from .models import Users,Availability
from django.urls import reverse
from django.contrib.auth.hashers import make_password, check_password

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
                    return redirect('home')  # Redirect to home page after login
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


