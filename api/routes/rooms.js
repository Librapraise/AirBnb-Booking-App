import express from "express"
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom, updateRoomAvailability } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


router.post("/:hotelId", verifyAdmin, createRoom)

router.put("/:id", verifyAdmin, updateRoom)

router.put("availability/:id", updateRoomAvailability)

router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)

router.get("/:id", getRoom)

router.get("/", getAllRooms)

export default router;