'use strict';
module.exports = function(app) {
	var warzoneapi = require('../controllers/WarzoneController');

	// todoList Routes
	app.route('/init').get(warzoneapi.ready);

	app.route('').get(warzoneapi.ready);

	app.route('/getwarzone/:player/:platform').get(warzoneapi.getstats);
};
