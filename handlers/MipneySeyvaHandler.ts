import { RoomService }  from '../services/RoomService'

export class MipneySeyvaHandler {
    roomService: RoomService;
    constructor() {
        this.roomService = new RoomService();
    }

    public async getRoom() {
        let room = await this.roomService.getRoom();
        return room
    } 

    public async createRoom(roomDetails) {
        let room = await this.roomService.createRoom(roomDetails);
        return room;
    }

    public async deleteRoom(id) {
        let deletedRoom = await this.roomService.deleteRoom(id);
        return deletedRoom;
    }
}