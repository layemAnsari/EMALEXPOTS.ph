from django.shortcuts import render
from pathlib import Path
from django.http import HttpResponse

def home(request):

    return render(request, 'index.html') 

