# syntax=docker/dockerfile:1

#
# Ubuntu Dockerfile
#
# https://github.com/dockerfile/ubuntu
#

# Pull base image.
FROM ubuntu:22.04

# Install.
RUN \
  sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list && \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y build-essential && \
  apt-get install -y software-properties-common && \
  apt-get install -y byobu curl git htop man unzip vim wget && \
  rm -rf /var/lib/apt/lists/*

# Add files.
ADD root/.bashrc /root/.bashrc
#ADD root/.gitconfig /root/.gitconfig
#ADD root/.scripts /root/.scripts

# Set environment variables.
ENV HOME /root

# Define working directory.
WORKDIR /root

# Define default command.

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - 
RUN apt install gcc
RUN apt install python3
RUN apt install nodejs
RUN apt install tmux
COPY requirements.txt requirements.txt
RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
RUN python3 get-pip.py --force-reinstall
RUN pip3 install -r requirements.txt
RUN git clone https://github.com/ultralytics/yolov5.git 
RUN git clone https://github.com/andythebreaker/material-kit-react.git
RUN cd material-kit-react && npm i --force
RUN npm install -g pubhtmlhere
RUN git clone https://github.com/andythebreaker/pythonRelay4y5v7fnd.git
RUN cd pythonRelay4y5v7fnd && npm i
COPY start.sh /start.sh
RUN chmod +x /start.sh
EXPOSE 5000 22128 43786 30461
COPY . .
CMD ["/start.sh"]

#CMD ["bash"]


#FROM python:3.7-alpine
#WORKDIR /code
#ENV FLASK_APP=app.py
#ENV FLASK_RUN_HOST=0.0.0.0
#RUN apk add --no-cache gcc musl-dev linux-headers
#COPY requirements.txt requirements.txt
#RUN pip install -r requirements.txt
#EXPOSE 5000
#COPY . .
#CMD ["flask", "run"]
