from django.shortcuts import render,redirect,get_object_or_404
from rest_framework import viewsets,permissions,status
from rest_framework.viewsets import ViewSet
from rest_framework.views import APIView
from django.contrib.auth import login, authenticate,logout
from django.contrib import messages
from .forms import UsersForm,LoginForm,BusForm,DestinationForm
from.serializer import UsersSerializer
from django.http import HttpResponse,HttpRequest
from .models import Users,Availability,Schedule,CustomUser
from django.urls import reverse
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UsersSerializer

def home(request):
    return render(request,"store/index.html")
@api_view(['POST'])
def signup(request):
    serializer = UsersSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(request.data['password'])
        user.save()
        token_serializer = AuthTokenSerializer(data={"username": user.username, "password": request.data['password']})
        if token_serializer.is_valid():
            token = Token.objects.create(user=user)
            return Response({"token": token.key, "user": serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['POST'])
def login(request):
    user =get_object_or_404(CustomUser,username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response({"detail":"Not found."},status=status.HTTP_404_NOT_FOUND)
    token, created=Token.objects.get_or_create(user=user)
    serializer = UsersSerializer(instance=user)
    return Response({"token": token.key, "user": serializer.data})


def display_availabilities(request):
    availabilities = Availability.objects.select_related('bus', 'schedule').filter(available_seats__gt=0)
    return render(request, 'store/availabilities.html', {'availabilities': availabilities})




