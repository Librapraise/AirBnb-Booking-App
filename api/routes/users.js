import express from "express"
import { getUser, updateUser, deleteUser, getAllUsers } from "../controllers/userController.js";
import verifyToken from "../utils/verifyToken.js";
//import { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

//middlewares
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("You are authenticated.")
})

router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getUser)
router.get("/", getAllUsers)

export default router;
