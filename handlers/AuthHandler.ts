import { User } from '../db/models/UserModel';
import { UserService } from '../services/UserService';
import config from '../config/secret-key'
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

export class AuthHandler {
    private userService: UserService;
    constructor() {
        this.userService = new UserService();
    }

    public async signUp (userInfo) {
        try {
            const user = {
                email: userInfo.email,
                password: bcrypt.hashSync(userInfo.password, 8)
            }
            await this.userService.postNewUser(user);
            return "New user has been signed up"
        }
        catch(error) {
            throw new Error(error)
        }
    };

    public async login (userInfo) {
        let user = await this.userService.getUser(userInfo); 
        console.log(user);
        let isPasswordValid = this.userService.isPasswordValid(user, userInfo.password)
        let token;
        if( user && isPasswordValid ) {
            token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 
            });
        }
        return({  
            email: user.email,
            accessToken: token
        });
      };
}