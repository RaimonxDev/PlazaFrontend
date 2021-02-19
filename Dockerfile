FROM node:lts-alpine3.10 as node

RUN mkdir /app

COPY package.json package-lock.json /app/

WORKDIR /app

# Instala y construye el Angular App
RUN npm ci
# Copia toda la aplicacion
COPY ./ /app/

RUN npm run build:ssr

# Angular app construida, la vamos a hostear un server production, este es Nginx

FROM nginx:1.19.0-alpine

COPY --from=node /app/dist/plazaFrontend/browser/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf


FROM node:lts-alpine3.10 AS ssr-server
COPY --from=node /app/dist /app/dist/
COPY /package.json /app/package.json
WORKDIR /app
EXPOSE 4000
CMD npm run serve:ssr
