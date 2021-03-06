# read_tomcat.py

import sys, random
from locust import HttpLocust, TaskSet

def readRequest(locust):
    postid = random.randint(1, 500)
    locust.client.get('/blog/cs144/'+str(postid), 
                        name='/blog/cs144')

class MyTaskSet(TaskSet):
    """ the class MyTaskSet inherits from the class TaskSet, defining the behavior of the user """
    tasks = [readRequest]

class MyLocust(HttpLocust):
    """ the class MyLocust inherits from the class HttpLocust, representing an HTTP user """
    task_set = MyTaskSet
    min_wait = 1000
    max_wait = 2000