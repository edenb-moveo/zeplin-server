import { MipneySeyvaHandler } from '../handlers/MipneySeyvaHandler'

export class MipneySeyvaController {
    mipneySeyvaHandler: MipneySeyvaHandler
    constructor() {
        this.mipneySeyvaHandler = new MipneySeyvaHandler();
        this.getRoom = this.getRoom.bind(this);
        this.createRoom = this.createRoom.bind(this);
        this.deleteRoom = this.deleteRoom.bind(this)
    }   

    public async getRoom(req, res) {
        let room = await this.mipneySeyvaHandler.getRoom();
        res.send(room);
    }

    public async createRoom(req, res) {
        let room = await this.mipneySeyvaHandler.createRoom(req.body);
        res.send(room)
    }

    public async deleteRoom(req,res) {
        let room = await this.mipneySeyvaHandler.deleteRoom(req.body.id);
        res.send(room);
    }

}