from django.urls import path
from . import views 
from django.conf.urls import handler404
handler404 = views.custom_404_view

urlpatterns = [
    path('', views.home,name='home'),
    path('about/',views.about,name='about'),
    path('extra-curricular/',views.extra,name="extra")
]