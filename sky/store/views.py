from django.shortcuts import render
from rest_framework import viewsets

from .form import UsersForm
from.serializer import UsersSerializer
from django.http import HttpResponse,HttpRequest
from .models import Users

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