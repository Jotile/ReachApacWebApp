FROM node:20.11.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
COPY ./serviceAccountKey.json ./serviceAccountKey.json
EXPOSE 5000
CMD ["npm", "start"]
