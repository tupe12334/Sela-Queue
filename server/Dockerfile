FROM node:alpine
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma db pull
RUN npx prisma generate
RUN npm run build
CMD npm start