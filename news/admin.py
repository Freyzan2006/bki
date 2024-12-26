from django.contrib import admin


from news.models import ArticlesModelUZ, ArticlesModelRU, ArticlesModelEN

admin.site.register(ArticlesModelUZ)
admin.site.register(ArticlesModelRU)
admin.site.register(ArticlesModelEN)

