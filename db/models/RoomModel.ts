const mongoose = require('mongoose')

export const Room = mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('RoomModel', Room);