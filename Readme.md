
# Start on docker-compose

```shell
docker-compose up
```

# Inicialize DB

```shell
npx sequelize-cli db:migrate
```

# Start on DockerSwarm

```shell
docker swarm init --advertise-addr SERVER-IP
docker stack deploy -c docker-compose-prod.yml example_docker
```
