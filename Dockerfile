# --- 🐳 Application Dockerfile ---
# Dockerfile will install app dependencies and run lint+unit tests before
# creating a production build of the app.

FROM node:14.21-alpine as base
LABEL maintainer="hedgecock.d@gmail.com"

WORKDIR /usr/src/app

# Install serve globally for serving app assets during acceptance testing
RUN npm install -g serve

# Install dependencies:
# CI=ture (Suppress open collective messages)
# CYPRESS_INSTALL_BINARY=0 (Skip installing Cypress binary)
COPY ./package*.json ./
RUN CI=true CYPRESS_INSTALL_BINARY=0 npm ci --no-optional

# Copy remaining source files
COPY . .

# Run tests
RUN npm run test:lint
RUN npm run test:unit

# Run a prod build
RUN BABEL_ENV=cypress npm run build

# Create a config file for `serve`
RUN echo "{ \"public\": \"public\", \"rewrites\": [{ \"source\": \"*\", \"destination\": \"/index.html\" }] }" >> ./serve.json

# Serve the app in the container on :5000
CMD ["serve"]