from django.contrib import admin
from django.urls import path
from dashboard import views
from django.views.generic import TemplateView

urlpatterns = [
    path('', views.home, name='home'),
    path('home/', views.home, name='home_explicit'),
    path('admin/', admin.site.urls),
    path(
        'manifest.json', 
        TemplateView.as_view(template_name='manifest.json', content_type='application/json'), 
        name='manifest.json'
    ),
]
