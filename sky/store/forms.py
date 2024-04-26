from django import forms
from .models import Bus


class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)
class BusForm(forms.ModelForm):
    class Meta:
        model = Bus
        fields = ['palte_number', 'number_of_site', 'owner_name', 'owner_ac']
class DestinationForm(forms.Form):
    destination = forms.CharField(max_length=100)