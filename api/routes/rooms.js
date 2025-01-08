import express from "express"
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/roomController.js";

const router = express.Router();


router.post("/", createRoom)

router.put("/:id", updateRoom)

router.delete("/:id", deleteRoom)

router.get("/:id", getRoom)

router.get("/", getAllRooms)

export default router;