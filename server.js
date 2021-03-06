var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

var routes = require('./api/routes/WarzoneRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Warzone RESTful API server ON: ' + port);
