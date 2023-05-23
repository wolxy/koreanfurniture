from shop.models import Сategory
from django.shortcuts import render

def categories(request):
    categories = Сategory.objects.all()
    return {'categories': categories}