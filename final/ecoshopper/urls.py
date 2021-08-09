from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:question_id>/', views.detail, name='detail'),
    path('barcode/<int:upc_code>/', views.barcode, name='detail')
]
