# build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build              # <- מפעיל גם export => /app/out

# runtime stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/out ./out   # <- מעתיקים את תיקיית out עצמה
EXPOSE 3000
CMD ["serve", "-s", "out", "-l", "3000"]
