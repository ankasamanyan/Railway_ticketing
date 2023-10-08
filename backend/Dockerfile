# Use a base image with Java 17
FROM alpine:latest
#FROM maven:3.9.4-alpine
#FROM 3.9.4-eclipse-temurin-11-alpine
#FROM 3.9.4-eclipse-temurin-11

# Set the working directory in the container
WORKDIR /app

# Copy the Maven project to the container
COPY . /app

RUN apk update
RUN apk add openjdk17
RUN apk add maven

# Build the Maven project and create a JAR file
RUN mvn compile
RUN mvn package

# Expose the port the app runs on
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]
