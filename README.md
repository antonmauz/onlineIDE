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
Navigate to the `project/` directory and run the Maven Wrapper script:
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
Navigate to the `ui/` directory, install the necessary dependencies, and start the server:
```sh
cd ../ui/
./mvnw spring-boot:run
```

For Windows:
```sh
cd ui\
mvnw.cmd spring-boot:run
```

Now, you should be able to access the frontend at `http://localhost:8083`.

## Docker (Optional)
You can use Docker Compose to build and run all the services at once.

To build and run all the services, use the following command:

```sh
docker-compose up
```

This configuration will build and run the project, compiler, ui, and dark-mode services, each on their own port, and all of them will be connected to the spring-network network.
