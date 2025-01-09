import Room from '../models/Room.js';
import Hotel from '../models/Hotel.js';

// Create a room
const createRoom = async (req, res, next) => {

    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id}});
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
}

//  Update a room
const updateRoom = async (req, res, next) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        });
        res.status(200).json(room);
    } catch (err) {
        next(err);
    }
} 

// Delete a room
const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {rooms: req.params.id}});
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err) {
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