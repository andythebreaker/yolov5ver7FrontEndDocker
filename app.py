import time
import os
import platform
import redis
from flask import Flask

app = Flask(__name__)
cache = redis.Redis(host='redis', port=6379)

def get_hit_count():
    retries = 5
    while True:
        try:
            return cache.incr('hits')
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

@app.route('/')
def hello():
    count = get_hit_count()
    var_os=str(os.name)
    var_os=var_os+str(platform.system())+str(platform.system())
    return var_os+'Hello World! I have been seen {} times.\n'.format(count)
