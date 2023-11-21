import express  from "express";
import { validateToken } from "../middlewares/validateTokenHandler.js";
const router = express.Router();

import { 
    getAllContacts, 
    getContact,
    createContact, 
    updateContact, 
    deleteContact 
} from '../controllers/contactControllers.js';

router.use(validateToken);
router.get('/getContacts', getAllContacts);
router.get('/getContacts/:id', getContact);
router.post('/createContact', createContact);
router.put('/updateContact/:id', updateContact)
router.delete('/deleteContact/:id', deleteContact)

export { router as contactRoutes };
