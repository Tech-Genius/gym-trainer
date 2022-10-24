
from django.db import models

# Create your models here.



class Post(models.Model):
    title = models.CharField(max_length=225)
    content = models.TextField()
    image = models.ImageField(upload_to="media")
    date_added = models.DateTimeField(auto_now_add=True)