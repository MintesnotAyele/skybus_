from django.shortcuts import render,redirect
from rest_framework import viewsets
from django.contrib.auth import login, authenticate, get_user_model,logout
from django.contrib import messages
from .form import UsersForm
from.serializer import UsersSerializer
from django.http import HttpResponse,HttpRequest
from .models import Users
from django.urls import reverse


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

def login_view(request):
    if request.user.is_authenticated:
         messages.success(request, "You are logged in")
         return redirect("core:index")
    if request.method == 'POST':
        username = request.POST.get("username")
        password = request.POST.get("password")

        try:
            user = Users.objects.get(username=username)
        except Users.DoesNotExist:
            messages.warning(request, f"User with email {username} does not exist")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, "You are logged in")
            return redirect(reverse("index"))
        else:
            messages.warning(request, "User does not exist")

    context = {
        
    }

    return render(request, "store/login.html", context)
