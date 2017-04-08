

# Docker Handbook

![Alt text](doc_logo.png "https://www.docker.com")

Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications, whether on laptops, data center VMs, or the cloud.

# Installation
  - Install docket toolbox with kinematic https://www.docker.com/products/docker-toolbox
  - after installation in some machines virtualization need to enabled follow below link            https://blogs.technet.microsoft.com/canitpro/2015/09/08/step-by-step-enabling-hyper-v-for-use-on-windows-10/
  - Now start docker console

# Basic docker commands

  - docker run <image>
  - docker start <name|id>
  - docker stop <name|id>
  - docker ps [-a include stopped containers] - to list all docker containers
  - docker rm <name|id>
  - docker build -t <your username>/<app_name> .
  
  
### Installation
    - Download docker toolbox
      https://www.docker.com/products/docker-toolbox
    - Create username in docker.com
    - To dock node js app https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
   
    
### Terminal 

![Alt text](terminal.PNG "https://www.docker.com")

# Launching Containers

  - To search images
  ```
  docker search --filter=stars=3 hello
  ```
# Build container image

  - To build a docker image first we need to create a file "Docker"
  ### This file consist of four major commands
  
    ```
    FROM <image-name>:<tag>
    RUN <command> 
    COPY <src> <dest> 
    EXPOSE <port> 
    CMD -a arga value -b argb-value
    ```
   
  ### Below docker file is used to run static html files in ngnix server
   
   #### Ngnix Server
    
    ```
    FROM nginx:1.11-alpine
    COPY index.html /usr/share/nginx/html/index.html
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    ```
    #### Node Server
    
     ```
     FROM node:boron
     RUN mkdir -p /usr/src/app
     WORKDIR /usr/src/app
     COPY package.json /usr/src/app/
     RUN npm install
     COPY . /usr/src/app
     EXPOSE 8080
     CMD [ "npm", "start" ]
    ```
    
   
  # Build and running image into container

  - After creation of docker file run command to take a build of image 
    ```
    docker build -t <any-name> .
    ```
    
  - To verify run below command this will list image with given name
    ```
    docker images
    
    REPOSITORY                    TAG                 IMAGE ID            CREATED             SIZE
    my-nodejs-app                 latest              50bdaca3105f        11 hours ago        667 MB
    node                          boron               e0fb852254e6        5 days ago          659 MB
    jenkins                       latest              ee06af673de2        2 weeks ago         713 MB
    kitematic/hello-world-nginx   latest              03b4557ad7b9        20 months ago       7.91 MB
    
    ```
    
  - Below command launch the built image is 
    ```
    docker run -d --name my-running-app -p 3000:3000 my-nodejs-app  
    ```
    
  - After running above command go to tcp url with port 3000 
    ```
    192.168.99.100:32768
    
    or
    
    curl 192.168.99.100:32768
    ```
    
  - To verify build is present in container 
    ```
    $ docker ps

    CONTAINER ID        IMAGE                  COMMAND             CREATED             STATUS              PORTS                     NAMES
    df289bf2768a        my-nodejs-app:latest   "npm start"         2 minutes ago       Up 2 minutes        0.0.0.0:32768->7899/tcp   my-nodejs-app-2
    ```
  
  
  ### Troubleshooting
  - Docker daemon port (usually <ip>:2376), may not work properly.

  - To resolve this do following steps , Goto  Virtualbox > Preferences -> Network -> Host-only Network and remove all adapters listed.
  
  - Remove existing docker machine 
    ```
    docker-machine rm default
    ````
  - Create new virtual machine 
    ```
    docker-machine create --driver virtualbox default
    ```
  - Set machine as 
    ```
    eval "$(docker-machine env default)"
    ```    
    
### Docker best UI
    - Ship yard https://github.com/shipyard/shipyard
    - Portainer https://github.com/portainer/portainer

