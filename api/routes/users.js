import express from "express"
import { getUser, updateUser, deleteUser, getAllUsers } from "../controllers/userController.js";
import { verifyToken, verifyAdmin, verifyUser } from "../utils/verifyToken.js";
//import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

//middlewares
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("You are logged in.")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("You are logged in and you can delete your account.")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("You are logged in as an admin.")
// })

//routes
router.put("/:id", verifyUser,  updateUser)
router.delete("/:id", verifyUser, deleteUser)
router.get("/:id", verifyUser, getUser)
router.get("/", verifyAdmin, getAllUsers)

export default router;
