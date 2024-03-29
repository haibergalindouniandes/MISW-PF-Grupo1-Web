FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install

COPY . .
RUN ng build --localize

# Reduce image size by excluding unnecessary layers
FROM nginx:alpine

COPY --from=builder /app/dist/sport-app/ /usr/share/nginx/html

# Crear un archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
