import express from 'express';
const router = express.Router();

import { contactRoutes } from "./routes/contactRoutes.js";

//add the routes here

router.use('/contact', contactRoutes);


export { router as routes };
