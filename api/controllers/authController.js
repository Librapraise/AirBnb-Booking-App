import User from "../models/User.js";
import bcrypt from "bcryptjs";      

export const register = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {

        const salt = await bcrypt.genSalt(10);  
        const hashedPassword = await bcrypt.hash(password, salt);           

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        return res.status(200).json({
            success: true,
            message: "User registered successfully",
        });
    } catch (err) {
        next(err);
    }
};
    