from django.contrib import admin
from django.urls import path,include
from . import views
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path('',views.home,name='home'),
    path('signup/',views.signup,name="signup"),
    path('login/',views.login, name='login'),
    path('add_bus/', views.add_bus, name='add_bus'),
    path('availabilities/', views.display_availabilities, name='availabilities'),
   
]