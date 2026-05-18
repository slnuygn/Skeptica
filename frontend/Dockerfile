# Stage 1: Build the frontend Assets
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
# (Doing this before copying the rest of the code takes advantage of Docker caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the project (change this if your build command is different, e.g., npm run build)
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the built assets from the builder stage
# Note: '/app/dist' is typical for Vite. For Create React App, use '/app/build'
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
