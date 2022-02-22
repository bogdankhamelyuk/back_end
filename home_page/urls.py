from django.urls import path
from . import views
from recorder.views import recorder

urlpatterns = [
    path('', views.home_page),
    path('/recorder', recorder),
]