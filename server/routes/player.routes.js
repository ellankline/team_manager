const PlayerController = require('../controllers/player.controller');

module.exports = function(app){
    app.get('/api', PlayerController.getAllPlayers);
    app.post('/api/players', PlayerController.createPlayer);
    app.delete('/api/:id', PlayerController.deletePlayer);
}