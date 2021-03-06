# mixed_tomcat.py

import sys, random
from locust import HttpLocust, TaskSet

def readRequest(locust):
    postid = random.randint(1, 500)
    locust.client.get('/editor/post?action=open&username=cs144&postid='+str(postid), name='/editor/post?action=open')

def writeRequest(locust):
    postid = random.randint(1, 500)
    locust.client.post('/editor/post?action=open&username=cs144&postid='+str(postid)+'&title=Loading%20Test&body=***Hello%20World!***', 
                        name='/editor/post?action=save')

class MyTaskSet(TaskSet):
    """ the class MyTaskSet inherits from the class TaskSet, defining the behavior of the user """
    tasks = {writeRequest:1, readRequest:9}

class MyLocust(HttpLocust):
    """ the class MyLocust inherits from the class HttpLocust, representing an HTTP user """
    task_set = MyTaskSet
    min_wait = 1000
    max_wait = 2000