'use strict';
module.exports = function(app) {
	var warzoneapi = require('../controllers/WarzoneController');

	// todoList Routes
	app.route('/init').get(warzoneapi.ready);

	app.route('').get(warzoneapi.ready);

	app.route('/getwarzone/:player/:platform').get(warzoneapi.getstats);

	app.route('/getact/:player/:platform').get(warzoneapi.getstatsact);

	app.route('/getmatchs/:player/:platform').get(warzoneapi.getmatchs);
};
