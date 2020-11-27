const mongoose = require('mongoose');
const RoomModel = require('../db/models/RoomModel')

export class RoomService {
    constructor(){
        mongoose.connect('mongodb://127.0.0.1:27017/epicure', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
    }

    public async getRoom() {
        let name = await RoomModel.find({})
        return name
    }

    public async createRoom(roomDetails) { 
        let room = await RoomModel(roomDetails).save();
        return room
    }

    public async deleteRoom(id) {
        let deletedRoom = await RoomModel.deletOne({_id: id});
        return deletedRoom;
    }
}