FROM node:alpine

RUN mkdir -p /opt/cert/
RUN mkdir -p /opt/app/
WORKDIR /opt/app

COPY package.json package-lock.json index.js ./

RUN npm i --production

COPY package.json package-lock.json index.js ./

CMD npm start