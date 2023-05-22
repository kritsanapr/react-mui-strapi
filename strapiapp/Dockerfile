FROM node:16

# Install dependencies
RUN apt-get update && apt-get install libvips -y

# Node Engironment
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Working Directory
WORKDIR /opt/

# Copy Files
COPY ./package.json ./package-lock.json ./

# Path: strapiapp\Dockerfile
ENV PATH /opt/node_modules/.bin:$PATH

# Install Dependencies
RUN npm install

# Working Directory for production
WORKDIR /opt/app

# Copy Files
COPY . .

# Build Strapi
RUN npm run build

# Expose Port
EXPOSE 1337

# Run App
CMD ["npm", "run", "develop"]
