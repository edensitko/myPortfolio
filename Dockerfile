# 1) Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build    # now creates /app/out

# 2) Production image
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/out ./out   # <-- this will now exist
EXPOSE 3000
CMD ["serve", "-s", "out", "-l", "3000"]
