FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY .mvn .mvn
COPY mvnw pom.xml ./

RUN ./mvnw dependency:go-offline

COPY src src
COPY frontend frontend

CMD ["./mvnw", "spring-boot:run"]