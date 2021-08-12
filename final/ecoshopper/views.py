from django.http.request import HttpRequest
from django.http.response import JsonResponse
from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from .prediction.model import WasteNet
from .prediction.predict import get_prediction

import gdown
import os
import torch
import pathlib

# Download model state
# url = 'https://drive.google.com/drive/u/0/folders/1kme1P1f_Dcly31rDtXDImtXa9amaYJ9B'
# make sure to be in final-project directory
full_path = pathlib.Path.cwd().joinpath('ecoshopper', 'prediction', 'combined_model.pth')
# gdown.download(url, model_state_path, quiet=False)

# Load model state from .pth file
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = WasteNet().to(device)
model.load_state_dict(torch.load(full_path, map_location=device)['model_state_dict'])

def index(request):
    # harcoded
    image, title, link, img_link, class_label = get_prediction(
                                                    model,
                                                    "coca cola",
                                                    num_results=5,
                                                    size=(300, 300),
                                                    view=""
                                                    )
    return HttpResponse(class_label)

def barcode(request: HttpRequest, upc_code: int):
    """Given a barcode upc_code, respond the results for the associated object.
    including object name, recyclable, reusable, Eco Score, alternatives, etc

    Args:
        request (HttpRequest): request object
        upc_code (int): the upc code after scanning

    Returns:
        JsonResponse: the JSON data for the frontend to display.
    """
    image, title, link, img_link, class_label = get_prediction(
                                                    model,
                                                    upc_code,
                                                    num_results=5,
                                                    size=(300, 300),
                                                    view=""
                                                    )
    return JsonResponse({
        'upc': upc_code,
        'object': title,
        'recyclable': class_label == "RECYCLABLE",
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
