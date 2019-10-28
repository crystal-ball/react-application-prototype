# Dockerfile is used primarily for running tests and building in CI/CD

FROM node:12.13.0-alpine as base
LABEL maintainer="hedgecock.d@gmail.com"

# Install bash for repo scripts
RUN apk add --no-cache bash

WORKDIR /usr/src/app

# Include serve globally for testing production builds
RUN npm install -g serve

# Install dependencies
COPY ./package*.json ./
RUN CI=true CYPRESS_INSTALL_BINARY=0 npm ci

# Copy remaining source files
COPY . .

# Run unit tests
RUN npm run test:lint
RUN npm run test:unit

# Copy serve config for prod build testing with `serve`
RUN echo "{ \"public\": \"public\" }" >> ./serve.json

# Build for acceptance testing
RUN npm run build

# Serve the app in the container on :5000
CMD ["serve"]