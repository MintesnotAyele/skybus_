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
    path('pay',views.chappa,name='pay'),
    path('ad/update/<int:pk>/',views.Adminuserupdate.as_view(),name='update'),
    path('ad/delete',views.Adminuserdelet.as_view(),name='delete'),
    path('verify-email/<str:token>/',views.verify_email, name='verify_email'),
    path('addschedule/',views.addSchedlue,name='sechedule'),
    path('cancle',views.Cancle,name='cancle'),
    path('cancel/<int:pk>/', views.Cancleview.as_view({'delete': 'destroy'}), name='cancel_delete'),
    path('cancelbook/<int:pk>/', views.Bookingview.as_view({'delete': 'destroy'}), name='cancel_delete_book'),
    path('increment-seats/', views.increment_available_seats, name='increment_available_seats'),
    path('sendEmail/', views.sendDeclien,name='sendEmail'),
     path('sendEmailA/', views.sendAprove,name='sendEmailA'),
     path('forgot-password/', views.forgot_password,name='forgot'), 
     path('reset-password/<str:uidb64>/<str:token>/', views.reset_password, name='reset_password'),# Paypal payment    
   # path('bus',views.AddBus.as_view(),name='bus')
    #path('availabilities/', views.display_availabilities, name='availabilities'),
   
   
]