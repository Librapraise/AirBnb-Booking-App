import express from "express"
import Hotel from "../models/Hotel.js"

const router = express.Router();

//Create
router.post("/", async (req,res) => {
    const newHotel = new Hotel(req.body);
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err) {
        res.status(500).json(err)
    }
});

//Update
router.put("/:id", async (req,res) => {

    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{new:true})
        res.status(200).json(updatedHotel);
    }catch(err) {
        res.status(500).json(err)
    }
});

//Delete
router.delete("/:id", async (req,res) => {

    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted...");
    }catch(err) {
        res.status(500).json(err)
    }
});

//Get   
router.get("/:id", async (req,res) => {

    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
    }catch(err) {
        res.status(500).json(err)
    }
});

//Get All
router.get("/", async (req,res,next) => {

    const failed = true;
    const err = new Error()
    err.status = 404;
    err.message = "Failed to fetch hotels";
    if(failed){
        next(err)
    }

    try{
        const hotels = await Hotel.findById("jgdfnjgm")
        res.status(200).json(hotels);
    }catch(err) {
        next(err)
    }
});

export default router;