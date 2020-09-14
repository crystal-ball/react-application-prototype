# --- 🐳 Cypress CI Dockerfile ---
# Extend the cypress/included base image with tools used in addition to Cypress

FROM cypress/included:5.1.0

# Install any packages used in Cypress test files
COPY ./package*.json ./
RUN CI=true CYPRESS_INSTALL_BINARY=0 npm ci --no-optiona

# Reset the `cypress run` entrypoint set by the `cypress/included` image
ENTRYPOINT []

# Wrap Cypress call with Percy for snapshot testing
CMD [ "npx", "percy", "exec", "--", "cypress", "run", "--record"]
