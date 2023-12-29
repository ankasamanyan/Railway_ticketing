FROM node:18-alpine
RUN npm install -g typescript
WORKDIR /backend

COPY package*.json ./
COPY . .
RUN npm install

RUN npx prisma generate
RUN chmod 777 start.sh

EXPOSE 3000
EXPOSE 5500
EXPOSE 5555
CMD ["./start.sh"]