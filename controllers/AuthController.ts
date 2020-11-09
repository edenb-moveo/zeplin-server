import {AuthHandler} from '../handlers/AuthHandler';

export class AuthController {
    private authHandler: AuthHandler;
    constructor() {
        this.authHandler = new AuthHandler();
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this)
    }
    public async signUp (req, res) {
        let user = await this.authHandler.signUp(req.body);
        res.send(user);
    }

    public async login (req, res) {
        let user = await this.authHandler.login(req.body);
        res.send(user);
    }
}