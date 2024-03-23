FROM node:lts-alpine AS builder
# ENV CHROME_BIN='/usr/bin/chromium-browser'

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Reduce image size by excluding unnecessary layers
FROM nginx:alpine

COPY --from=builder /app/dist/sport-app/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
