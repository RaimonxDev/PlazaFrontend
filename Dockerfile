FROM node:lts-alpine3.10 as build

RUN mkdir /app

COPY package.json package-lock.json /app/

WORKDIR /app

# Instala y construye el Angular App
RUN npm install
# Copia toda la aplicacion
COPY ./ /app/

RUN npm run build:prod

FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/plazaFrontend/browser /usr/share/nginx/html
EXPOSE 80
