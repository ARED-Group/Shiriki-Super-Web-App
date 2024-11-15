#!/bin/bash

# Refer to the docker-compose.yml file for what's happening here

# Ensure BalenaEngine is running
balena-engine version || {
    echo "BalenaEngine is not installed or running. Exiting."
    exit 1
}

# Pull images for all services
balena-engine pull apache/apisix:${APISIX_IMAGE_TAG:-3.11.0-debian}
balena-engine pull bitnami/etcd:3.5.11
balena-engine pull prom/prometheus:v2.25.0
balena-engine pull grafana/grafana:7.3.7

balena run -d --name super-web-app \
    --restart always \
    --network apisix \
    us-central1-docker.pkg.dev/m-shirki/super-web-app/super-web-app:amd64

# Create the required network
balena-engine network create apisix || echo "Network 'apisix' already exists."

# Create the required volume for etcd
balena-engine volume create etcd_data || echo "Volume 'etcd_data' already exists."

# Run the etcd service
balena-engine run -d --name etcd \
    --restart always \
    --network apisix \
    -p 2379:2379 \
    -v etcd_data:/bitnami/etcd \
    -e ETCD_ENABLE_V2="true" \
    -e ALLOW_NONE_AUTHENTICATION="yes" \
    -e ETCD_ADVERTISE_CLIENT_URLS="http://etcd:2379" \
    -e ETCD_LISTEN_CLIENT_URLS="http://0.0.0.0:2379" \
    bitnami/etcd:3.5.11

# Run the Apache APISIX service
balena-engine run -d --name apisix \
    --restart always \
    --network apisix \
    -p 9180:9180 \
    -p 9080:9080 \
    -p 9091:9091 \
    -p 9443:9443 \
    -p 9092:9092 \
    -v $(pwd)/config.yaml:/usr/local/apisix/conf/config.yaml:ro \
    apache/apisix:${APISIX_IMAGE_TAG:-3.11.0-debian}

# Run the Prometheus service
balena-engine run -d --name prometheus \
    --restart always \
    --network apisix \
    -p 9090:9090 \
    -v $(pwd)/prometheus.yml:/etc/prometheus/prometheus.yml \
    prom/prometheus:v2.25.0

# Run the Grafana service
balena-engine run -d --name grafana \
    --restart always \
    --network apisix \
    -p 3000:3000 \
    -v $(pwd)/provisioning:/etc/grafana/provisioning \
    -v $(pwd)/dashboards:/var/lib/grafana/dashboards \
    -v $(pwd)/config/grafana.ini:/etc/grafana/grafana.ini \
    grafana/grafana:7.3.7

echo "All services are now running."
