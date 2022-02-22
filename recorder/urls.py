from django.urls import path
from . import views

urlpatterns = [
    path('', views.recorder),
    path('success/', views.success)

]