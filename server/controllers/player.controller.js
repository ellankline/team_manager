const {request, response} = require('express');
const Player = require("../models/player.model");

module.exports = {
    createPlayer: (request, response) => {
        const {name, prefPos} = request.body;
        Player.create({
            name: name,
            prefPos: prefPos
        })
            .then(player => response.json(player))
            .catch(err => response.status(400).json(err));
    },

    getAllPlayers: (request, response) => {
        Player.find({})
            .then((allPlayers) => {
                console.log(allPlayers);
                response.json(allPlayers);
            })
            .catch(err => response.json(err))
    },

    deletePlayer: (request, response) => {
        Player.deleteOne({_id: request.params.id})
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.json(err))
    }
}