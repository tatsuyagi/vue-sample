# Docker image
FROM node:slim

# Work directory
WORKDIR /scripts

# Copy source
COPY ./public ./package*.json ./

# install dependencies
RUN npm install

COPY . .

# start command
CMD ["npm", "start"]
