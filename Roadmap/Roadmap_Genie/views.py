from django.shortcuts import render

# View for the homepage
def home(request):
    return render(request, 'index.html')
