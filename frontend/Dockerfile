# Stage 1: Build React app
FROM node:20.11.0-alpine as build
WORKDIR /usr/src/app
COPY ./frontend/package*.json ./
RUN npm ci --omit=dev
COPY ./frontend ./
RUN npm run build

# Stage 2: Serve build folder with simple HTTP server
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
