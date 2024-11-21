from django.http import JsonResponse
from django.shortcuts import render, redirect
from rest_framework import generics
from .models import City, Itinerary
from .serializers import CitySerializer, ItinerarySerializer


def home(request):
    cities = City.objects.all()
    return render(request, 'roteiros_planner/home.html', {'cities': cities})

# Detalhes da cidade
def city_detail(request, city_id):
    city = City.objects.get(id=city_id)
    itineraries = Itinerary.objects.filter(city=city)
    return render(request, 'roteiros_planner/city_detail.html', {'city': city, 'itineraries': itineraries})


def home_redirect(request):
    return redirect("http://localhost:3000/")

# listar todas as cidades
class CityListView(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer

# listar itinerários de uma cidade
class ItineraryListView(generics.ListCreateAPIView):
    serializer_class = ItinerarySerializer

    def get_queryset(self):
        city_id = self.kwargs['city_id']
        return Itinerary.objects.filter(city__id=city_id)

# retornar a lista de cidades em formato JSON
def city_list(request):
    cities = City.objects.all().values('id', 'name', 'country', 'description')  # Inclui apenas os campos necessários
    city_data = list(cities)  # Converte para uma lista
    return JsonResponse({'cities': city_data})

# retornar a lista de itinerários em formato JSON
def itinerary_list(request):
    itineraries = list(Itinerary.objects.values())  # Retorna todos os itinerários
    return JsonResponse(itineraries,safe=False)

