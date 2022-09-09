import gdown
import os
import torch
import pathlib
import numpy as np


from django.http.request import HttpRequest
from django.http.response import JsonResponse
from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from .prediction.model import WasteNet
from .prediction.predict import get_prediction


full_path = pathlib.Path.cwd().joinpath(
    'ecoshopper', 'prediction', 'combined_model.pth'
)

# Load model state from .pth file
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = WasteNet().to(device)
model.load_state_dict(
    torch.load(full_path, map_location=device)['model_state_dict']
)


def index(request):
    # Hardcoded for default index page.
    image, title, link, img_link, class_label = get_prediction(
        model,
        "coca cola",
        num_results=5,
        size=(300, 300),
        view=False
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
        view=False
    )
    return JsonResponse({
        'upc': upc_code,
        'object': title,
        'recyclable': class_label == "RECYCLABLE",
        'img_link': str(img_link),
        'reusable': False,
        'eco_score': heuristic(title, class_label),
        'alternatives': get_alternatives(upc_code)
    })


def get_alternatives(upc_code):
    # alternative_dict = {
    #
    # }
    return ""


def heuristic(title, recyclable):
    """Simple recycling score heuristic."""
    score = 0
    if recyclable == "RECYCLABLE":
        score += 2
    score += np.random.randint(-2, 5)
    return min(score, 5)
