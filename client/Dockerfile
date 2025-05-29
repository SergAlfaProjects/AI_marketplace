FROM node:20 AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

# Установка с явным указанием версий проблемных пакетов
RUN npm install ajv@8.12.0 ajv-keywords@5.1.0
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
