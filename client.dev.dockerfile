FROM node:14-alpine

WORKDIR /client
EXPOSE 8080

COPY package.json .
RUN npm install
COPY . .

CMD [ "npm", "run", "dev"]