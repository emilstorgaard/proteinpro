# Use official Node.js image as base
FROM node:latest

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY . .

# Install dependencies
RUN yarn

# Copy the rest of the application code
RUN yarn build

# Expose port 8680 to the outside world
EXPOSE 8680

# Command to run the application
CMD ["yarn", "preview", "--", "--port", "8680", "--host", "0.0.0.0"]