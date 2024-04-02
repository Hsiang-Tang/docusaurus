FROM node:lts AS base
RUN corepack enable
WORKDIR /app

FROM base AS prod
COPY . .  
RUN npm ci
RUN npm run build

FROM caddy:2-alpine
COPY --from=prod /app/build /var/docusaurus
COPY --from=prod /app/Caddyfile /etc/caddy/Caddyfile
EXPOSE 3000
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
