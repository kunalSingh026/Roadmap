from django.urls import path
from . import views  # importing views from the current app

urlpatterns = [
    path('', views.home, name='home'),  # root of the app
]
