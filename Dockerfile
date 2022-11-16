FROM    node:16.18.1
WORKDIR /src
ADD     package.json /src/package.json
ADD     . /src
RUN     npm install
RUN     npm run build
CMD     ["npm", "start"]
