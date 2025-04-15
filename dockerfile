FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY index.html server.js styles.css ./
COPY images/ ./images/
EXPOSE 3000
CMD ["node", "server.js"]