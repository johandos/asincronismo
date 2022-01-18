FROM node:alpine
WORKDIR /usr/src/app
RUN yarn install
RUN yarn add react react-dom react-scripts
COPY --chown=node:node . .
EXPOSE 3000
USER node