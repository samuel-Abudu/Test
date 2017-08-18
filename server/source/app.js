const express = require('express');
const path = require('path');
const app = express();
app.get('/', (request, response) => {
  console.log('Welcome to my site');
  return response.send({ message: 'Hello World' });
});
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '../../views/templates')));
app.get('/template', (req, res) => {
  console.log('fow far');
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});
app.get('/template/index', (req, res) => {
  console.log('fow far');
  return res.send('Last route');
});
app.listen('8090', () => {
  console.log('App listening on port 8090');
});
