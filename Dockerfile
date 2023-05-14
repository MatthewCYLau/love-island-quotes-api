FROM node:18-alpine
WORKDIR /app

# install, and cache node modules
COPY package.json .
COPY package-lock.json* .
RUN npm install

# install application
COPY . .
EXPOSE 8080
CMD [ "npm", "start"]