'use strict';

const API = require('call-of-duty-api')();

exports.ready = function(req, res) {
	res.json({ message: 'Api iniciada con exito' });
};

exports.getstats = function(req, res) {
	API.login('leanlarroza@est.frba.utn.edu.ar', 'Larrydevc09').then(
		console.log('Request: Player: ' + req.params.player + ' - Platform: ' + req.params.platform),
		API.MWBattleData(req.params.player, req.params.platform)
			.then((output) => {
				res.json(output);
			})
			.catch((err) => {
				API.login('leanlarroza@est.frba.utn.edu.ar', 'Larrydevc09').then(
					console.log('Request: Player: ' + req.params.player + ' - Platform: ' + req.params.platform),
					API.MWBattleData(req.params.player, req.params.platform)
						.then((output) => {
							res.json(output);
						})
						.catch((err) => {
							res.json({ message: req.params.player + ': ' + err });
						})
				);
			})
	);
};
