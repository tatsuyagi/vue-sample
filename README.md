# Vue.js 勉強用

## Getting started

```sh
# After move to checkout directory
npm install
npm start
# Listening on 8080
```

## Create docker image
```sh
# Build
docker build -t tagname:1.0.0 .
# After execute following command, copy IMAGE_ID from output
docker images | grep tagname | awk '{print $3}'
# Create container using copied IMAGE_ID
docker create --name vue-sample --publish=3000:8080 {IMAGE_ID}
# After execute following command, copy CONTAINER_ID from output
docker ps -a | grep vue-sample | awk '{print $1}'
# Run container using copied CONTAINER_ID
docker start {CONTAINER_ID}
```


