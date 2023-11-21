import express from "express";
const router = express.Router();
import { registerUser, loginUser, currentUser } from "../controllers/userControllers.js";
import { validateToken } from "../middlewares/validateTokenHandler.js";

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/current',validateToken, currentUser );

export { router as userRoutes };