const express = require('express');

const app = express();
app.get('/', (request, response) => {
  console.log('Welcome to my site');
  return response.send({ message: 'Hello World' });
});
app.listen('8090', () => {
  console.log('App listening on port 8090');
});
