# Docker
## Images
### List local images
```shell
docker images
```
### Download image from registry
```shell
docker pull IMAGE
```
### Upload image to registry
```shell
docker push IMAGE  (need login)
```

### Delete local image
```shell
docker image rm IMAGE
```
## Containers
### Start container  
```shell
docker container run IMAGE
```

### Get logs from container 
```shell
docker container logs -f CONTAINER
```

### Execute Command on container 
```shell
docker container exec -it CONTAINER COMMAND
```

### Inspect Container
```shell
docker container inspect CONTAINER
```

### Stop Container 
```shell
docker container stop CONTAINER
```

### Delete Container 
```shell
docker container rm CONTAINER
```

## Network
### Network Create
```shell
docker network create NAME
```

### Connect container to network
```shell
docker network connect NETWORK CONTAINER
```

### Start/Stop on docker-compose
```shell
docker-compose up
docker-compose down
```

# Orchestrator

## Swarm
### Start on DockerSwarm
```shell
docker swarm init --advertise-addr SERVER-IP
```

### Deploy on DockerSwarm
```shell
docker stack deploy -c DEPLOYMENT_FILE STACK_NAME
```

### List Services
```shell
docker service ls
```

### List Containers on Service
```shell
docker service ps SERVICE
```

### Update Image on Service
```shell
docker service update --image IMAGE SERVICE
```

## Kubernetes
### Deploy on Kubernetes
```shell
kubectl apply -f DEPLOYMENT_FILE
```

### List Pods
```shell
kubectl get pods
```

### Execute Command on Pod
```shell
kubectl exec -it POD_NAME -- bash
```

### Logs from pod
```shell
kubectl logs -f  osticket-59fccb6d-kq9g2
```
