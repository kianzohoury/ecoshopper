from django.http.request import HttpRequest
from django.http.response import JsonResponse
from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

from .models import Question


def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'ecoshopper/index.html', context)

# Replae with another view later. 
def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)

def barcode(request: HttpRequest, upc_code: int):
    """Given a barcode upc_code, respond the results for the associated object.
    including object name, recyclable, reusable, Eco Score, alternatives, etc

    Args:
        request (HttpRequest): request object
        upc_code (int): the upc code after scanning

    Returns:
        JsonResponse: the JSON data for the frontend to display.
    """

    return JsonResponse({
        'upc': upc_code,
        'object': 'toothpaste',
        'recyclable': True,
        'reusable': False,
        'eco score': 80,
        'alternatives': [
            {
                'name': 'toothpaste tablets',
                'imgUrl': 'https://www.byrdie.com/thmb/zru3dagcpw1H-A-UmcVPy9bU_pc=/900x0/filters:no_upscale():max_bytes(150000):strip_icc()/mint-bottlecopy-d697fb68cd0e4d9e862b77cfbc2a2c69.jpg',
                'productLink': 'https://www.amazon.com/Sustainable-Toothpaste-Tablets-Fluoride-Essentials/dp/B08TTHQF5Q'
            },
            {
                'name': 'metal tube toothpaste',
                'imgUrl': 'https://m.media-amazon.com/images/I/71IxL-u9XhL._SL1500_.jpg',
                'productLink': 'https://www.amazon.com/Davids-Natural-Toothpaste-Antiplaque-Fluoride-Free/dp/B00ZTJC26C'
            }
        ]
    })
