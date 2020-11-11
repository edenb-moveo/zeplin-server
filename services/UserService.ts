const mongoose = require('mongoose');
const User = require("../db/models/UserModel");
const bcrypt = require("bcryptjs");
// var hash = bcrypt.hashSync('bacon', 8);
export class UserService {
    constructor(){
        mongoose.connect('mongodb://127.0.0.1:27017/epicure', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
    }

    public async postNewUser(user) {
        let newUser = await User(user).save();
        return newUser;
    }

    public async getUser(userInfo) {
        let user = await User.findOne({email: userInfo.email})
        return user;
    }

    public async isPasswordValid(user, password) {
        let isPasswordValid = await bcrypt.compareSync( password, user.password)
        return isPasswordValid;
    }
    
}