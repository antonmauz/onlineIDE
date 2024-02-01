# OnlineIDE

## Getting Started

This project consists of three main parts: 
* the compiler server,
* the API server, and 
* the frontend.

### Prerequisites

Before you start, make sure you have the following installed:

- Java 11 or higher for running the servers
- Maven for managing the project's dependencies
- Node.js and npm for running the frontend
- Angular CLI for serving the frontend and managing Angular assets
- Docker (optional) for containerization

### Starting the Compiler Server

To start the compiler server, navigate to the `compiler/` directory and run the Maven Wrapper script:

```sh
cd compiler/
./mvnw spring-boot:run
```

For Windows:
```sh
cd compiler\
mvnw.cmd spring-boot:run
```

### Starting the API Server
Navigate to the project/ directory and run the Maven Wrapper script:
```sh
cd ../project/
./mvnw spring-boot:run
```

For Windows:
```sh
cd project\
mvnw.cmd spring-boot:run
```

### Starting the Frontend
Navigate to the ui/frontend/ directory, install the necessary dependencies, and start the server:
```sh
cd ../ui/
./mvnw spring-boot:run
```

Now, you should be able to access the frontend at `http://localhost:4200`.

## Docker (Optional)
If you have Docker installed, you can use the provided Dockerfile in each directory to build a Docker image and run it:
```sh
docker build -t compiler .
docker run -p 8080:8080 compiler
```

Replace compiler with project, dark-mode or ui to build and run the API server or the frontend, respectively.

Alternatively, you can use Docker Compose to build and run all the services at once. Here is an example docker-compose.yaml:
```sh
docker-compose up
```
