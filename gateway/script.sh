#!/bin/bash

# Refer to the docker-compose.yml file for what's happening here

# Ensure BalenaEngine is running
balena-engine version || {
    echo "BalenaEngine is not installed or running. Exiting."
    exit 1
}

# Pull images for all services
balena-engine pull apache/apisix:${APISIX_IMAGE_TAG:-3.11.0-debian}
balena-engine pull nginx:1.19.0-alpine
balena-engine pull test

# Create the required network for APISIX
balena-engine network create apisix || echo "Network 'apisix' already exists."

# Run the Apache APISIX service
balena-engine run -d --name apisix \
    --restart always \
    --network apisix \
    -p 9180:9180 \
    -p 9080:9080 \
    -p 9091:9091 \
    -p 9443:9443 \
    -p 9092:9092 \
    -v $(pwd)/apisix-standalone.yaml:/usr/local/apisix/conf/apisix.yaml:ro \
    -e APISIX_STAND_ALONE=true \
    apache/apisix:${APISIX_IMAGE_TAG:-3.11.0-debian}

# Run the super-web-app service
balena-engine run -d --name super-web-app \
    --restart always \
    --network apisix \
    -p 9000:80 \
    us-central1-docker.pkg.dev/m-shirki/super-web-app/super-web-app:amd64

# Run the test service (nginx)
balena-engine run -d --name test \
    --restart always \
    --network apisix \
    -p 9081:80 \
    -v $(pwd)/upstream/test.conf:/etc/nginx/nginx.conf \
    -e NGINX_PORT=80 \
    nginx:1.19.0-alpine

balena-engine run -d --name couchdb \
    --restart always \
    --network apisix \
    -p 5984:5984 \
    -e COUCHDB_USER=Maryk \
    -e COUCHDB_PASSWORD=Marykiki \
    -v couchdb_data:/opt/couchdb/data \
    couchdb:3.3

balena-engine run -d --name backend \
    --restart always \
    --network apisix \
    -p 8080:8080 \
    -e COUCHDB_URL=http://couchdb:5984 \
    backend-service

echo "All services are now running."
