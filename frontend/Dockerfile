# Use Node.js as the base image for Angular applications
FROM node:16-alpine3.17

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY ../package.json package-lock.json ./

# Install dependencies
#RUN npm add @angular/cli
RUN npm install -g @angular/cli
RUN npm install

# Copy the rest of the application to the container
COPY .. .

# Build the Angular application
#RUN ng build

# Expose the port the app runs on
EXPOSE 4200

# Run the Angular application using a simple HTTP server
#CMD ["npm", "run", "start:dev"]
CMD ["ng", "build"]
