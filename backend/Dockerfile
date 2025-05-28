FROM node:20.11.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
ARG FIREBASE_SERVICE_ACCOUNT
ENV FIREBASE_SERVICE_ACCOUNT=${FIREBASE_SERVICE_ACCOUNT}
RUN printf "%s" "$FIREBASE_SERVICE_ACCOUNT" > ./serviceAccountKey.json
EXPOSE 5000
CMD ["npm", "start"]
