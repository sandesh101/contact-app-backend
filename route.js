import express from 'express';
const router = express.Router();

import { contactRoutes } from "./routes/contactRoutes.js";
import { userRoutes } from './routes/userRoutes.js';

//add the routes here

router.use('/contact', contactRoutes);
router.use('/user', userRoutes);


export { router as routes };
