# Development stage
FROM node:18-alpine as development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./
COPY ./remix* ./server.js ./
COPY ./app ./app
CMD [ "npm", "run", "dev" ]

# Builder stage
FROM development as builder
WORKDIR /usr/src/app
# Build the app with devDependencies still installed from "development" stage
RUN npm run build
# Clear dependencies and reinstall for production (no devDependencies)
RUN rm -rf node_modules
RUN npm ci --only=production


# Production stage
FROM node:18-alpine as production
RUN apk --no-cache add nodejs ca-certificates
WORKDIR /root/
COPY --from=builder /usr/src/app ./
EXPOSE 3000
CMD [ "npm", "start" ]