import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

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

export const login = async (req, res, next) => {
    const { username, password } = req.body;
  
    // Validate input
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required.",
        });
    }

    // Check if user exists
    try {

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials",
            });
        }   

        // Check if password is correct
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        // Create and assign token
        const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
        
        // Return token and user details
        const { password: hashedPassword, isAdmin, ...otherDetails } = user._doc;
        return res.cookie(
            "access_token",
            token,
            {
                httpOnly: true,
                secure: true,
                sameSite: "none",
            }).status(200).json({
            details: {...otherDetails},
            isAdmin
            // success: true,
            // message: "User logged in successfully",
            });
    } catch (err) {
        next(err);
    }
};