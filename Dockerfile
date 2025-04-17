# ───── Stage 1: build the Next.js app ───────────────────────────────
FROM node:18-alpine AS builder

# מערכת קבצים מינימלית ובטוחה
WORKDIR /app

# התקנת תלויות רק לפי lock‑file
COPY package*.json ./
RUN npm ci --omit=dev          # מתקין production dependencies בלבד

# העתקת קוד המקור ובנייה
COPY . .
RUN npm run build              # יוצר .next/

# ───── Stage 2: production image ────────────────────────────────────
FROM node:18-alpine

# תיקיית עבודה
WORKDIR /app

# התקנת pm2 (לא חובה, נוח לקריאות לוגים / restart)
RUN npm install -g pm2

# העתקת האפליקציה שנבנתה מה־builder
COPY --from=builder /app ./

# יציאת ברירת‑מחדל של Next.js (ניתן לשנות עם ‑p או env)
ENV PORT=3000
EXPOSE $PORT

# הפקודה שמריצה SSR ‑ `next start`
CMD ["pm2-runtime", "npm", "--", "start", "--", "-p", "3000"]
