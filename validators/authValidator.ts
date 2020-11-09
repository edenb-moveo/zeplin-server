const jwt = require("jsonwebtoken");
import config from '../config/secret-key'

export class AuthValidator {
    public verifyToken(req, res, next) {
        try {
            const token = req.header('Authorization').replace('Bearer ', '')
            if (!token) {
                throw new Error("No token provided!")
            }
            jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                throw new Error("Unauthorized!")
            }
            next();
            });
        } catch (e){
            throw new Error("Unauthorized!");
        }
    };
}
