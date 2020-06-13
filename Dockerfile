FROM node:12-alpine AS dependencies
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/app/src
COPY package.json yarn.lock ./
COPY tsconfig.json ./
RUN yarn --silent


FROM node:12-alpine AS release
WORKDIR /usr/app/src
ENV NODE_ENV=production
COPY --from=dependencies /usr/app/src/ ./
RUN ls
COPY src ./src
RUN yarn build
CMD yarn start
