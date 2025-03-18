# from django.shortcuts import render
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status


# class HelloApiView(APIView):
#     def get(self, request):
#         my_name = request.GET.get('name', None)
#         if my_name:
#             retValue = {}
#             retValue['data'] = "Hello" + my_name
#             return Response(retValue, status=status.HTTP_200_OK)
#         else:
#             return Response(
#                 {"res": "parameter: name is None"},
#                 status=status.HTTP_400_BAD_REQUEST
#            )

#LAB2

# from rest_framework import status
# from rest_framework.response import Response
# from django.http import JsonResponse
# from rest_framework.decorators import api_view
# from django.core.serializers.json import DjangoJSONEncoder
# import json
# import logging

# from .models import Post

# logger = logging.getLogger('django')

        

# @api_view(['GET'])
# def add_post(request):
#     title = request.GET.get('title', '')
#     content = request.GET.get('content', '')
#     photo = request.GET.get('photo', '')
#     location = request.GET.get('location', '')

#     new_post = Post()
#     new_post.title = title
#     new_post.content = content
#     new_post.photo = photo
#     new_post.location = location
#     new_post.save()
    
#     logger.debug("************ myhello_api: " + title)
    
#     if title:
#         return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)
#     else:
#         return Response(
#             {"res": "parameter: name is None"},
#             status=status.HTTP_400_BAD_REQUEST
#         )


# @api_view(['GET'])
# def list_post(request):
#     posts = Post.objects.all().values()
#     return JsonResponse(list(posts), safe=False)
#     # return Response({"data": 
#     #     json.dumps(
#     #         list(posts),
#     #         sort_keys=True,
#     #         indent=1,
#     #         cls=DjangoJSONEncoder)},
#     #     status=status.HTTP_200_OK)


#HW1
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
import json
import logging
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from .models import Course

logger = logging.getLogger('django')

@api_view(['GET'])  # API 仍然使用 GET（符合教授的寫法）
def add_course(request):

    department = request.GET.get('department', '')
    course_title = request.GET.get('course_title', '')
    instructor = request.GET.get('instructor', '')

    
    new_post = Course()
    new_post.department = department
    new_post.course_title = course_title
    new_post.instructor = instructor
    new_post.save()

    logger.debug("************ myhello_api: " + course_title)  

    
    if course_title:  
        return Response({"data": course_title + " insert!"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
from django.http import JsonResponse

@api_view(['GET'])
def course_list(request):

    courses = Course.objects.all().values()  

    return JsonResponse(list(courses), safe=False)  


