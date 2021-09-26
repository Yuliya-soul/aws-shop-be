
FROM node:12-alpine As base


WORKDIR /app

COPY package.json ./

RUN npm install

WORKDIR /app
COPY . .



FROM node:12-alpine As application
COPY --from=base /app/package.json ./
RUN npm install --only=production
RUN npm install pm2 -g
COPY --from=base /app .
USER node
ENV PORT=3001
EXPOSE 3001


CMD [ "node", "index.js" ]