# jenkins-in-docker

This repository contains _Jenkins_ master and agent `Dockerfiles`, [read how to use them](http://antonfisher.com/posts/2017/01/16/run-jenkins-in-docker-container-with-persistent-configuration/).

![Jenkins + Docker + gitHub](https://raw.githubusercontent.com/antonfisher/antonfisher.github.io/master/images/posts/8-run-jenkins-in-docker-container-with-persistent-configuration/run-jenkins-in-docker-container-with-persistent-configuration-logo.png)

to remove any old instance and restart a new one run:
```
cd images/master
bin/restart.sh
```


to run it in the background and capture the log output to a file
```
cd images/master
bin/container-run.sh > localjenkins.log 2>&1 &
```
to run in the foreground just
```
cd images/master
bin/container-run.sh 
```


to view it in the browser go to:

[http://localhost:8080/](http://localhost:8080/)
