# Use the official Node.js 14 image.
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Initialize a new Node.js project and install Express
# Use shell form to chain commands
RUN npm init -y && npm install express

# Copy the application code
COPY server.js .

# The application's port
EXPOSE 8000

# Command to run the application
CMD [ "node", "server.js" ]
