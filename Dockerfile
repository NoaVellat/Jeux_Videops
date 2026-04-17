# Étape 1 : Build de Space_Invader
FROM node:20-alpine AS builder-space

# Installer Python et les outils de build (nécessaires pour node-gyp)
RUN apk add --no-cache python3 make g++

WORKDIR /app/Space_Invader
COPY Games/Space_Invader/package.json Games/Space_Invader/package-lock.json* ./
RUN npm ci || npm install
COPY Games/Space_Invader/ ./
RUN npm run build

# Étape 2 : Serveur nginx
FROM nginx:alpine

# Copier la configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier la page d'accueil
COPY index.html /usr/share/nginx/html/index.html

# Copier Two_Ships
COPY Games/Two_Ships_Passing_The_Night /usr/share/nginx/html/Two_Ships

# Copier Space_Invader (build généré par Parcel)
COPY --from=builder-space /app/Space_Invader/build /usr/share/nginx/html/Space_Invader

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
