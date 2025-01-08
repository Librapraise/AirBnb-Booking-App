import jwt from 'jsonwebtoken';
import {createError} from '../utils/error.js';


const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;    
    if (!token) {
        return next(createError("You need to login first", 401));
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            return next(createError("You need to login first", 403));
        }
        req.user = user;
        next();
    });
};


export default verifyToken;