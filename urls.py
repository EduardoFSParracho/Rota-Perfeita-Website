from django.contrib import admin
from django.shortcuts import redirect
from django.urls import path
from . import views
from .views import CityListView, ItineraryListView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('city/<int:city_id>/', views.city_detail, name='city_detail'),
    path('cities/', CityListView.as_view(), name='city_list'),
    path('cities/<int:city_id>/itineraries/', ItineraryListView.as_view(), name='itinerary-list'),
    path('', lambda request: redirect('http://localhost:3000', permanent=False)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)