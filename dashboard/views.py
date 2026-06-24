from django.shortcuts import render

# Create your views here.
from pathlib import Path
from django.http import HttpResponse


def home(request):

    index_path = Path(__file__).resolve().parent / "static" / "index.html"
    return HttpResponse(index_path.read_text(encoding="utf-8"), content_type="text/html")

