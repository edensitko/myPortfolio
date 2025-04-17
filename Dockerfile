# build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build && npm run export   # אם אתה משתמש ב‑npm run export

# serve static
FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/out ./out
EXPOSE 3000
CMD ["serve", "-s", "out", "-l", "3000"]
