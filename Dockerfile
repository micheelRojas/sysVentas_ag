FROM node:carbon-slim

# Create app directory
WORKDIR /sysventas_ag

# Install app dependencies
COPY package.json /sysventas_ag/
RUN npm install

# Bundle app source
COPY . /sysventas_ag/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
