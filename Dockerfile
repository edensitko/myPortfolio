FROM node:18-alpine

USER root

RUN apk update && apk add --no-cache python3 py3-pip openssl ca-certificates && \
    pip3 install --upgrade pip --break-system-packages && \
    pip3 install ansible --break-system-packages

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --prefer-offline --no-audit

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
