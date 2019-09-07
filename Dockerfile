# Dockerfile is used primarily for running tests and building in CI/CD

FROM node:10.16-alpine as base
LABEL maintainer="hedgecock.d@gmail.com"

# Install bash for repo scripts
RUN apk add --no-cache bash

WORKDIR /usr/src/app

ENV TRAVIS_CI true

# Install dependencies
COPY ./package*.json ./
RUN npm ci

# Copy remaining source files
COPY . .

# Run unit tests
RUN npm run test:lint
RUN npm run test:unit

# Run the production build
CMD [ "npm", "run", "build" ]