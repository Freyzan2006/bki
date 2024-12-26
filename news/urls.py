

from django.urls import path 
import news.views as v

urlpatterns = [
    path('uz/', v.NewsHomeViewUZ.as_view(), name = 'news_home'),
    path('ru/', v.NewsHomeViewRU.as_view(), name = 'news_home_RU'),
    path('en/', v.NewsHomeViewEN.as_view(), name = 'news_home_EN'),

    path('uz/<int:pk>', v.NewsDetailViewUZ.as_view(), name = "news-detail"),
    path('ru/<int:pk>', v.NewsDetailViewRU.as_view(), name = "news-detail_RU"),
    path('en/<int:pk>', v.NewsDetailViewEN.as_view(), name = "news-detail_EN")
]