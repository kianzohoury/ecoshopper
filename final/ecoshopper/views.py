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
