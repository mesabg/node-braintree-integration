/*
 * server.js
 */

const express = require('express');
const layout = require('express-layout');
const bodyParser = require('body-parser');
require('dotenv').config();

// Start Express server
const app = express();
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Set layout
app.use(layout());
app.set('layouts', './views/layouts');
app.set('layout', 'default');

// Middlewares management
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

// Set routes
const routes = require('./routes');
app.use('/', routes.main);

// Where's my server running
app.listen(app.get('port'), () => {
	console.log('Server is running on port', app.get('port'))
});