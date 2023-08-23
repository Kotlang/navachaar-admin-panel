# Use the official Nginx image
FROM nginx:1.21.3-alpine

# Copy the build folder into the Nginx HTML directory
COPY build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
