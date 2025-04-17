# ---------- שלב Build ----------
FROM node:18-alpine AS builder

WORKDIR /app

# התקנת תלויות
COPY package*.json ./
RUN npm ci

# העתקת הקוד ובנייה
COPY . .
RUN npm run build        # יוצר .next  ו‑node_modules/production

# ---------- שלב Production ----------
FROM node:18-alpine

WORKDIR /app

# רק תלויות Production הדרושות להפעלה
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev    # מתקין רק prod‑deps

# מעתיקים את הבילד ואת ה‑public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000
ENV NODE_ENV=production

CMD ["npm", "start"]
