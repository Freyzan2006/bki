from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic.detail import DetailView

from news.models import ArticlesModelUZ, ArticlesModelRU, ArticlesModelEN

class NewsHomeViewUZ(TemplateView):
    template_name = "news/news.html"
    
class NewsHomeViewRU(TemplateView):
    template_name = "news/newsRU.html"

class NewsHomeViewEN(TemplateView):
    template_name = "news/newsEN.html"


class NewsDetailViewUZ(DetailView):
    model = ArticlesModelUZ
    template_name = 'news/new_item.html'
    context_object_name = 'article'

class NewsDetailViewRU(DetailView):
    model = ArticlesModelRU
    template_name = 'news/new_item_RU.html'
    context_object_name = 'articleRU'

class NewsDetailViewEN(DetailView):
    model = ArticlesModelEN
    template_name = 'news/new_item_EN.html'
    context_object_name = 'articleEN'
