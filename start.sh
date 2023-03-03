#!/bin/bash

minikube start --driver hyperkit
minikube addons enable ingress
minikube addons enable metrics-server

eval $(minikube docker-env)

# docker build -t registry.cwi.dev/cwi-sample-web-app:v3 .