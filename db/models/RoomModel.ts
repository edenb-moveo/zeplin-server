const mongoose = require('mongoose')

export const Room = mongoose.Schema({
    isOn: {
        type: Boolean,
        require: true
    },
    name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('RoomModel', Room);