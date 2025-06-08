FROM node:20.19.2
WORKDIR /app
COPY app/* .
RUN npm install

