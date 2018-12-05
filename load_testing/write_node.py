# write_tomcat.py

import sys, random
from locust import HttpLocust, TaskSet

def writeRequest(locust):
    postid = random.randint(1, 500)
    locust.client.put('/api/cs144/'+str(postid),
                        data={'title':'Loading Test', 'body':'***Hello World!***'}, 
                        name='/api/cs144')

class MyTaskSet(TaskSet):
    tasks = [writeRequest]
    def on_start(locust):
        response = locust.client.post("/login/", data={"username":"cs144", "password": "password"})
        if response.status_code != 200:
            print("FAIL to start with posting data to server. Make sure that your server is running.")
            sys.exit();

class MyLocust(HttpLocust):
    """ the class MyLocust inherits from the class HttpLocust, representing an HTTP user """
    task_set = MyTaskSet
    min_wait = 1000
    max_wait = 2000