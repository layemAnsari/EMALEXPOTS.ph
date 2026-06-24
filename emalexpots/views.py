from pathlib import Path

from django.http import HttpResponse


def home(request):
    """Serve the React build (index.html) from emalexpots/static/static/."""

    index_path = Path(__file__).resolve().parent / "static" / "index.html"
    return HttpResponse(index_path.read_text(encoding="utf-8"), content_type="text/html")


