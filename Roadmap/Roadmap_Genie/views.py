from django.shortcuts import render

# Homepage view
def home(request):
    return render(request, 'index.html')

# Login page view
def login_view(request):
    return render(request, 'login.html')

# Signup page view
def signup_view(request):
    return render(request, 'signup.html')
