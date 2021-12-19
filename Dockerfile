FROM node:14-slim AS build

RUN apt-get update && apt-get install -y libglu1 libxi6 libgconf-2-4 pkg-config libtool automake autoconf nasm  make gcc

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
