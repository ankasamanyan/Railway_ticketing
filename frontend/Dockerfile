FROM node:18-alpine3.16
WORKDIR  /frontend
COPY package*.json ./
COPY . .
RUN npm install --no-audit
RUN npm install
EXPOSE 4200
CMD ["npm", "start"]

# # Stage 0, "build-stage", based on Node.js, to build and compile the frontend
# FROM tiangolo/node-frontend:10 as build-stage
# WORKDIR /app
# COPY package*.json /app/
# RUN npm install
# COPY ./ /app/
# ARG configuration=production
# RUN npm run build -- --output-path=./dist/out --configuration $configuration
