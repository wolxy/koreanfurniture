from django.shortcuts import render
from shop.models import Сategory
from django.views.generic import ListView

# Create your views here.

class СategoryListView(ListView):
    model = Сategory
    template_name = 'index.html'



def index(request):
    return render(request, 'index.html')


def company(request):
    return render(request, 'company.html')


def project(request):
    return render(request, 'project.html')

def inform(request):
    return render(request, 'poleznay_inform.html')