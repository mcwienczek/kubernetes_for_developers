# Prerequisites

- install docker
- install kubectl
- install minikube
- code editor of your choice

# Prepare everything

```
minikube start
```

You should see:

```
❯ kubectl get pods
No resources found in default namespace.
```


# Step 1 - Deploy an app

```
$ kubectl apply -f deployment.yaml
deployment.apps/webapp created
```

```
$ kubectl get pods
NAME                      READY   STATUS    RESTARTS   AGE
webapp-7855ff655c-nftmz   1/1     Running   0          2m
webapp-7855ff655c-r4fl4   1/1     Running   0          2m
webapp-7855ff655c-z2drg   1/1     Running   0          2m
```

```
$ kubectl port-forward webapp-7855ff655c-nftmz 8080:80  
Forwarding from 127.0.0.1:8080 -> 80
Forwarding from [::1]:8080 -> 80
Handling connection for 8080
Handling connection for 8080
Handling connection for 8080
Handling connection for 8080
Handling connection for 8080
Handling connection for 8080
```


# Step 2 - Deploy a service for the app

```
$ kubectl apply -f service.yaml 
service/webapp created
```
