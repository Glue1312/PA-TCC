# Use the latest Node.js image
FROM node:18

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy local code to the container image.
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the React app
RUN npm install -g serve

# Set the command to run the app
CMD ["serve", "-s", "build"]

# Inform Docker that the container listens on the specified port at runtime.
EXPOSE 8080
