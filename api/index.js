import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import roomRoute from "./routes/rooms.js";
import hotelRoute from "./routes/hotels.js";

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    } catch (error) {
        throw error;
    }
};
    
mongoose.connection.on("disconnected", () =>{
    console.log("mongoDB disconnected")
})


//middlewares

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/hotels", hotelRoute)
app.use("/api/rooms", roomRoute)


app.listen(8800, () =>{
    //connect();
    console.log("Connected to backend.")
})