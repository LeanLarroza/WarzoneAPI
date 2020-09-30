'use strict';

const API = require('call-of-duty-api')();

exports.ready = function(req, res) {
	res.json({ message: 'Api iniciada con exito' });
};

exports.getstats = function(req, res) {
	console.log('Request: Player: ' + req.params.player + ' - Platform: ' + req.params.platform),
		API.login('leanlarroza@est.frba.utn.edu.ar', 'Larrydevc09')
			.then((result) => {
				console.log('Result log-in: ' + result);
				if (API.isLoggedIn()) {
					API.MWBattleData(req.params.player, req.params.platform)
						.then((output) => {
							res.json(output);
						})
						.catch((err) => {
							res.json({ message: req.params.player + ': ' + err });
						});
				}
			})
			.catch((err) => {
				res.json({ message: req.params.player + ': ' + err });
			});
};

exports.getstatsact = function(req, res) {
	console.log('Request act: Player: ' + req.params.player + ' - Platform: ' + req.params.platform),
		API.login('leanlarroza@est.frba.utn.edu.ar', 'Larrydevc09')
			.then((result) => {
				console.log('Result log-in: ' + result);
				if (API.isLoggedIn()) {
					API.MWwz(req.params.player, req.params.platform)
						.then((output) => {
							res.json(output);
						})
						.catch((err) => {
							res.json({ message: req.params.player + ': ' + err });
						});
				}
			})
			.catch((err) => {
				res.json({ message: req.params.player + ': ' + err });
			});
};

exports.getcombat = function(req, res) {
	console.log('Request act: Player: ' + req.params.player + ' - Platform: ' + req.params.platform),
		API.login('leanlarroza@est.frba.utn.edu.ar', 'Larrydevc09')
			.then((result) => {
				console.log('Result log-in: ' + result);
				if (API.isLoggedIn()) {
					API.MWfullcombatwz(req.params.player, req.params.platform)
						.then((output) => {
							res.json(output);
						})
						.catch((err) => {
							res.json({ message: req.params.player + ': ' + err });
						});
				}
			})
			.catch((err) => {
				res.json({ message: req.params.player + ': ' + err });
			});
};
