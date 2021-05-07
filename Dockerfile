FROM node:14

WORKDIR /usr/src/app

COPY ["package.json","package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]