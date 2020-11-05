'use strict';

const API = require('call-of-duty-api')();

exports.ready = function(req, res) {
	res.json({ message: 'Api iniciada con exito' });
};

///
/// {ID BATTLENET O PS4} REEMPLAZAR # por %23
/// {PLATFORM PS4 = psn / Battlenet = battle}
/// $(eval a=JSON.parse(decodeURIComponent(`$(querystring $(urlfetch json https://getwarzoneapi.herokuapp.com/getwarzone/{ID}/{PLATFORM}))`)).br;`KD: ${a.kdRatio.toFixed(2)}`)
/// $(eval a=JSON.parse(decodeURIComponent(`$(querystring $(urlfetch json https://getwarzoneapi.herokuapp.com/getwarzone/{ID}/{PLATFORM}))`)).br;`Wins: ${a.wins}`)
/// $(eval a=JSON.parse(decodeURIComponent(`$(querystring $(urlfetch json https://getwarzoneapi.herokuapp.com/getwarzone/{ID}/{PLATFORM}))`)).br;`Kills: ${a.kills}`)
///

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
							console.log(err);
						});
				}
			})
			.catch((err) => {
				res.json({ message: req.params.player + ': ' + err });
				console.log(err);
			});
};

///
/// {ID ACTIVISION} Reemplazar " " por %20 y # por %23
/// $(eval a=JSON.parse(decodeURIComponent(`$(querystring $(urlfetch json https://getwarzoneapi.herokuapp.com/getact/{ID ACTIVISION}/acti))`)).lifetime.mode.br.properties;`KD: ${a.kdRatio.toFixed(2)}`)
/// $(eval a=JSON.parse(decodeURIComponent(`$(querystring $(urlfetch json https://getwarzoneapi.herokuapp.com/getact/{ID ACTIVISION}/acti))`)).lifetime.mode.br.properties;`Kills: ${a.kills}`)
/// $(eval a=JSON.parse(decodeURIComponent(`$(querystring $(urlfetch json https://getwarzoneapi.herokuapp.com/getact/{ID ACTIVISION}/acti))`)).lifetime.mode.br.properties;`Wins: ${a.wins}`)
///
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
							console.log(err);
						});
				}
			})
			.catch((err) => {
				res.json({ message: req.params.player + ': ' + err });
				console.log(err);
			});
};

///
/// {ID BATTLENET} Reemplazar " " por %20 y # por %23
/// $(eval a=JSON.parse(decodeURIComponent(`$(querystring $(urlfetch json https://getwarzoneapi.herokuapp.com/getid/{ID BATTLENET}/battle))`)).uno;`Id Activision: ${a.username}`)
///
exports.getid = function(req, res) {
	console.log('Request act: Player: ' + req.params.player + ' - Platform: ' + req.params.platform),
		API.login('leanlarroza@est.frba.utn.edu.ar', 'Larrydevc09')
			.then((result) => {
				console.log('Result log-in: ' + result);
				if (API.isLoggedIn()) {
					API.ConnectedAccounts(req.params.player, req.params.platform)
						.then((output) => {
							res.json(output);
						})
						.catch((err) => {
							res.json({ message: req.params.player + ': ' + err });
							console.log(err);
						});
				}
			})
			.catch((err) => {
				res.json({ message: req.params.player + ': ' + err });
				console.log(err);
			});
};

exports.getmatchs = function(req, res) {
	console.log('Request act: Player: ' + req.params.player + ' - Platform: ' + req.params.platform),
		API.login('leanlarroza@est.frba.utn.edu.ar', 'Larrydevc09')
			.then((result) => {
				console.log('Result log-in: ' + result);
				if (API.isLoggedIn()) {
					API.MWcombatwz(req.params.player, req.params.platform)
						.then((output) => {
							res.json(output);
						})
						.catch((err) => {
							res.json({ message: req.params.player + ': ' + err });
							console.log(err);
						});
				}
			})
			.catch((err) => {
				res.json({ message: req.params.player + ': ' + err });
				console.log(err);
			});
};
