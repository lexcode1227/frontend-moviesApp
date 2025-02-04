FROM node:latest AS build 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 88

CMD [ "nginx", "-g", "daemon off;" ]