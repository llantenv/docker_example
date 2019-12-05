FROM node:8

WORKDIR /usr/src/app
COPY src ./

RUN npm install

EXPOSE 3000
CMD [ "npm", "run" ,"start-prod" ]
