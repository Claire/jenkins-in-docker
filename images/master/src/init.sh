#!/usr/bin/env bash

exit_code=0;

echo -e "+--------------------------+";
echo -e "| Jenkins master container |";
echo -e "+--------------------------+\n";

echo -e "\nPull config from repository...\n";
cd /root/jenkins;
    git pull;
    if [[ "${?}" != 0 ]]; then
        exit 1;
    fi;
cd -;

#install docker compose
curl --fail --silent -L https://github.com/docker/compose/releases/download/1.6.2/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

echo -e "\nStart Jenkins service...\n";
/usr/local/bin/jenkins.sh;
