from django.db import models

# Create your models here.

from django.db import models



class City(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    description = models.TextField()
    photo = models.ImageField(upload_to='cities/', null=True, blank=True)

    def __str__(self):
        return self.name


class Itinerary(models.Model):
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    duration = models.IntegerField(help_text="Number of days")
    description = models.TextField()

    def __str__(self):
        return f"{self.title} - {self.city.name}"




