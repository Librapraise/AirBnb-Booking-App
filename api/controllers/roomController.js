import Room from '../models/Room.js';

// Create a room
const createRoom = async (req, res, next) => {
    try {
        const newRoom = new Room(req.body);
        const savedRoom = await newRoom.save();
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
}

//  Update a room
const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedRoom);
    }
    catch (err) {
        next(err);
    }
}

// Delete a room
const deleteRoom = async (req, res, next) => {
    try {
        await Room.findByIdAndDelete(req.params.id);
        res.status(200).json("Room has been deleted...");
    }
    catch (err) {
        next(err);
    }
}   

// Get a room
const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
}               

// Get all rooms
const getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
}   


export { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms };