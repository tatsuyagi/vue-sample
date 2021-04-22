# Vue.js 勉強用

## Getting started

```sh
# Clone repository, and move to directory
git clone https://github.com/tatsuyagi/vue-sample
cd vue-sample
# Install dependencies
npm install
# Start application (listening on 8080)
npm start
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


