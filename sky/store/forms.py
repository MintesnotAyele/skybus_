from django import forms
from .models import Users,Bus

class UsersForm(forms.ModelForm):
    class Meta:
        model = Users
        fields = ['username', 'email', 'password','phone_number']

class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)
class BusForm(forms.ModelForm):
    class Meta:
        model = Bus
        fields = ['palte_number', 'number_of_site', 'owner_name', 'owner_ac']
