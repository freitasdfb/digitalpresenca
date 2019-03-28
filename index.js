const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');
const routes = require('./app/routes');

const app = express();

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});

app.use(express.static(path.resolve('app', 'public')));

app.set('view engine', 'njk');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server iniciado na porta 3000');
});
