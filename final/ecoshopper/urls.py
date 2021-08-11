from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('barcode/<int:upc_code>/', views.barcode, name='barcode')
]
