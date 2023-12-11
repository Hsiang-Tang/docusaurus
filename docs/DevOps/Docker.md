# Docker

![1](/docker/1.png)

```txt title="Docker"
Overview/
├── Introduction
│   ├── What is Docker
│   └── Advantages of Docker
├── Installation
│   ├── System Requirements
│   └── Installation Steps
└── Usage
    ├── Basic Commands
    ├── Image Management
    └── Container Management
```

## 1. Introduction
### What is Docker
- Docker: A platform for containerized apps.
### Advantages of Docker
- Benefits: Efficiency, portability, and isolation.

## 2. Installation
### System Requirements
- Check Docker compatibility.
### Installation Steps
- Steps to install Docker.
    ```
    # Install Docker
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    
    # Manage Docker as a non-root user
    sudo groupadd docker
    sudo usermod -aG docker $USER
    newgrp docker
    
    # Verify Installation
    docker --version
    ```

## 3. Usage
### Basic Commands
- Running containers, listing, and stopping.
    ```
    # Run a container
    docker run hello-world
    
    # List Docker containers
    docker ps -a
    
    # Stop a running container
    docker stop [CONTAINER_ID]
    ```
### Image Management
- Handling Docker images.
    ```
    # List images
    docker images
    
    # Pull an image
    docker pull ubuntu
    
    # Remove an image
    docker rmi [IMAGE_ID]
    ```
### Container Management
- Operating Docker containers.
    ```
    # Execute commands in a container
    docker exec -it [CONTAINER_ID] /bin/bash
    
    # View container logs
    docker logs [CONTAINER_ID]
    
    # Copy files between container and host
    docker cp [CONTAINER_ID]:/path/to/file /path/to/destination
    ```
