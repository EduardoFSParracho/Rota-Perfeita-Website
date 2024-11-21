from rest_framework import serializers
from .models import City, Itinerary


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['id', 'name', 'country', 'description', 'photo']

class ItinerarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Itinerary
        fields = ['id', 'city', 'title', 'duration', 'description']
