from django.db import models

class ArticlesModelUZ(models.Model): # UZ
    title = models.CharField('Ism', max_length = 50, default = '')
    anons = models.CharField("E'lon", max_length = 250, default = '')
    full_text = models.TextField('Maqola')
    data = models.DateTimeField('Nashr qilingan sana')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return f'/news/{self.id}'
    

    class Meta:
        verbose_name = 'Yangiliklar'
        verbose_name_plural = 'Yangiliklar'

class ArticlesModelRU(models.Model): 
    title = models.CharField('Название', max_length = 50, default = '')
    anons = models.CharField('Анонс', max_length = 250, default = '')
    full_text = models.TextField('Статья')
    data = models.DateTimeField('Дата публикации')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return f'/news/{self.id}'
    

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'

class ArticlesModelEN(models.Model): 
    title = models.CharField('Name', max_length = 50, default = '')
    anons = models.CharField('Announcement', max_length = 250, default = '')
    full_text = models.TextField('Article')
    data = models.DateTimeField('Publication date')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return f'/news/{self.id}'
    

    class Meta:
        verbose_name = 'New'
        verbose_name_plural = 'News'

