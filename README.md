# OAuth Server Application

This is a simple OAuth server application written in Node.js using Express. It is designed to handle OAuth redirects and capture authorization codes. The application runs inside a Docker container, simplifying setup and ensuring consistency across environments.

## Prerequisites

Before you begin, ensure you have Docker installed on your system. If you do not have Docker installed, you can download and install it from [Docker's official website](https://www.docker.com/products/docker-desktop).

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Building the Docker Image

To build the Docker image, run the following command in the directory containing your `Dockerfile` and `server.js`:

```bash
docker build -t my-oauth-server .
```
### Running the Docker Container
To run the Docker container, use the following command:

```bash
docker run -p 8000:8000 my-oauth-server
```
This command runs the my-oauth-server Docker container and maps port 8000 of the container to port 8000 on your host. This allows you to access the server at http://localhost:8000.

Testing the Application
To test that the application is running correctly, navigate to:


```bash
http://localhost:8000/oauth/callback?code=test123
```
You should see a message indicating that the authorization code has been received.
