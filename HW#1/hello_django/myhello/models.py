from django.db import models

# Create your models here.

from django.db import models

# class Post(models.Model):
#     title = models.CharField(max_length=100)
#     content = models.TextField(blank=True)
#     photo = models.URLField(blank=True)
#     location = models.CharField(max_length=100)
#     created_at = models.DateTimeField(auto_now_add=True)

from django.db import models

class Course(models.Model):  # 作業名稱
    department = models.CharField(max_length=100)  # 開課單位
    course_title = models.CharField(max_length=200)  # 課程名稱
    instructor = models.CharField(max_length=100)  # 授課教師

    



