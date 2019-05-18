FROM mongo
MAINTAINER weiz <>

COPY scripts /scripts
RUN chmod 400 /scripts/test.key 
RUN chown 999:999 /scripts/test.key 
RUN sed -i 's/archive.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
RUN sed -i 's/security.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
RUN apt-get update &&  apt-get install curl -y
expose 27017
# ENTRYPOINT []