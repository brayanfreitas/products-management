# Build stage
FROM node:20-alpine3.18 AS build

WORKDIR /app

COPY tsconfig*.json package*.json ./

COPY src/ src/

COPY prisma/ prisma/

RUN npm run generate

RUN npm run build

# Production stage
FROM node:20-alpine3.18 AS production

WORKDIR /app
EXPOSE 3000

COPY --from=build /app/prisma/ prisma/
COPY --from=build /app/package*.json ./

RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist

CMD ["node", "dist/server.js"]

