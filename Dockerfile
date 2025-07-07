FROM node:alpine AS build

COPY ./frontend /frontend

ENV VITE_DOCKER="true"
WORKDIR /frontend
RUN npm i && npm run build

## output is in /frontend/build
FROM alpine AS main

COPY --from=build /frontend/build /frontend/build

CMD ["sh", "-c", "ls -la /frontend/build/ && cp -r /frontend/build/. /output/ && echo 'Files copied successfully' && ls -la /output/"]