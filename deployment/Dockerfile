### STAGE 1: Build ###
FROM node:16.17.1-alpine AS build
ARG ENVIRONMENT
ENV PORT=""
RUN mkdir /app && chmod -R 777 /app
RUN rm -rf node_modules && rm -rf package-lock.json
WORKDIR /app
COPY . .
RUN npm install
RUN echo build:${ENVIRONMENT}
RUN npm run build:${ENVIRONMENT}

WORKDIR /app/dist/apps/indusur

EXPOSE 3000

RUN npm install

#ENTRYPOINT npm run run:${ENVIRONMENT}
CMD npm run start