# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

COPY . .
RUN pnpm build

# Stage 2: Production (serve dengan nginx)
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Hapus file default nginx
RUN rm -rf ./*

# Copy hasil build dari stage builder
COPY --from=builder /app/dist ./

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3007
CMD ["nginx", "-g", "daemon off;"]

