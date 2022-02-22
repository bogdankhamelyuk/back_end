from django.shortcuts import render

# Create your views here.
#from django.http import HttpResponse


def recorder(request):
    return render(request,'recorder/recorder.html')

def success(request):
    return render(request,'recorder/success.html')