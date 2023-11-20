#!/usr/bin/env bash

docker kill manticore
docker rm manticore
docker run -e EXTRA=1 --name manticore  -p 127.0.0.1:9306:9306  -d manticoresearch/manticore
