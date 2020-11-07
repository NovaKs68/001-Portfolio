#FROM node:12
#
#WORKDIR /app
#
#COPY package*.json /app/
#RUN npm install
#
#COPY ./ /app/
#
#
#ARG configuration=production
#RUN npm run build -- --output-path=/app/dist/out --configuration $configuration
#
#
#CMD ng serve --host 0.0.0.0

FROM node:12.2.0

RUN npm i -g @angular/cli
  # Bundle APP files

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#handle package installation
COPY package*.json /app/
ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install

COPY . /app

EXPOSE 4200
