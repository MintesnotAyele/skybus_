from django.contrib import admin
from django.urls import path,include
from . import views
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path('',views.home,name='home'),
    path('signup/',views.signup,name="signup"),
    path('login/',views.UserLogin.as_view(), name='login'),
    path('logout',views.UserLogout.as_view(),name='logout'),
    path('availabilities/', views.display_availabilities, name='availabilities'),
   
   
]