const express = require('express');
const logger = require('morgan');
const app = express();
const path = require('path');
const api = require('./api/index');
const router = require('./routes/index');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view cache', true);
app.use(express.static('build', {
   maxage: 86400,
 }));

app.use(logger('dev'));
app.use('/api', api);
app.get('/', router);
app.use('*', router);

app.listen(PORT);