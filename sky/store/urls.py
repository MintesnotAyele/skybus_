from django.contrib import admin
from django.urls import path,include
from . import views
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path('',views.home,name='home'),
    path('signup/',views.signup,name="signup"),
    path('login/',views.login, name='login'),
    path('logout',views.UserLogout.as_view(),name='logout'),
    path('view',views.UserView.as_view(),name='view'),
    path('booking',views.book_bus_seat,name='booking'),
    path('ad/view/<int:pk>/',views.Adminuserview.as_view(),name="admin-view"),
    path('ad/update/<int:pk>/',views.Adminuserupdate.as_view(),name='update'),
    path('ad/delete',views.Adminuserdelet.as_view(),name='delete'),
   # path('bus',views.AddBus.as_view(),name='bus')
    #path('availabilities/', views.display_availabilities, name='availabilities'),
   
   
]