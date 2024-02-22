from django.contrib import admin
from django.urls import path,include
from . import views
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path('',views.home,name='home'),
    path('signup/',views.signup,name="signup"),
    #path('signin/',views.signin, name="signin"),
    path('login/', LoginView.as_view(template_name='store/login.html'))
]