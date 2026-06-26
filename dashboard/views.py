from django.shortcuts import render
from pathlib import Path
from django.http import HttpResponse

def home(request):
    print("passing through === ")
    return render(request, 'index.html') 

