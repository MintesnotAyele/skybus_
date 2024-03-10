from django.contrib import admin
from django.urls import path,include
from . import views
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path('',views.home,name='home'),
    path('signup/',views.UserRegister.as_view(),name="signup"),
    path('login/',views.UserLogin.as_view(), name='login'),
    path('logout',views.UserLogout.as_view(),name='logout'),
    path('view',views.UserView.as_view(),name='view')
    #path('availabilities/', views.display_availabilities, name='availabilities'),
   
   
]