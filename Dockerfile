FROM node:20
WORKDIR /app
COPY package*.json ./
RUN mkdir /.npm
RUN chown -R 965:965 /.npm
RUN chown -R 965:965 /app
USER 965:965
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
