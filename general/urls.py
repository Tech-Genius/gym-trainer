from django.urls import path
from general import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.home, name='name'),

]
