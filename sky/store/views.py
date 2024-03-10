from django.shortcuts import render, redirect, get_object_or_404
from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from .forms import UsersForm, LoginForm, BusForm, DestinationForm
from .serializer import UsersSerializer, UserRegisterSerializer, UserLoginSerializer
from django.http import HttpResponse, HttpRequest
from .models import Users, Availability, Schedule, CustomUser
from django.urls import reverse
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authentication import SessionAuthentication
from .validations import custom_validation, validate_email, validate_password

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UsersSerializer

def home(request):
    return render(request, "store/index.html")

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
    user = get_object_or_404(CustomUser, email=request.data['email'])
    serializer = UsersSerializer(instance=user)
    if not user.check_password(request.data['password']):
        return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)
    token_serializer = AuthTokenSerializer(data={"username": user.username, "password": request.data['password']})
    if token_serializer.is_valid():
        token = Token.objects.create(user=user)
        return Response({"token": token.key, "user": serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Remove authentication and permission classes from these views
class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        clean_data = custom_validation(request.data)
        serializer = UserRegisterSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(clean_data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)



class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

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
    permission_classes = (permissions.AllowAny,)  # Allow unauthenticated access
    authentication_classes = ()  # No authentication needed
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

# You might want to remove authentication from UserView as well
class UserView(APIView):
    permission_classes=(permissions.AllowAny,)
    authentication_classes=(SessionAuthentication,)  # No authentication needed
    def get(self, request):
         serializer=UsersSerializer(request.user)
         return Response({'user': serializer.data},status=status.HTTP_200_OK)
