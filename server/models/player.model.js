const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [
            2,
            "Name must be at least 2 characters in length"
        ]
    },
    prefPos: {type: String}
}, {timestamps: true});
const User = mongoose.model('Player', PlayerSchema);
module.exports = User;