# Stage 0, "build-stage", 
FROM node:8 as build-stage
WORKDIR /app
COPY ./ /app/
RUN npm install

RUN npm run build
# Stage 1, based on Nginx
FROM nginx:1.17
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY --from=build-stage /app/custom-build-conf/nginx.conf /etc/nginx/conf.d/default.conf