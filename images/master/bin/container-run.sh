#!/usr/bin/env bash
export LOCALGIT_WORKSPACE=/Users/cmartinez/GDrive/_src/git

docker run \
    -d \
    --name jenkins-master \
    -p 8080:8080 \
    -p 50000:50000 \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v $(PWD)/src/userContent:/root/jenkins/userContent \
    -v $LOCALGIT_WORKSPACE:/root/localgit \
    -v /root/workspace \
    jenkins-master &&\
    docker logs -f jenkins-master;
