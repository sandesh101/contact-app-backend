import express  from "express";
const router = express.Router();

import { getAllContacts } from '../controllers/contactControllers.js';
import { createContact } from '../controllers/contactControllers.js';
import { updateContact } from '../controllers/contactControllers.js';
import { getContact } from '../controllers/contactControllers.js';
import { deleteContact } from '../controllers/contactControllers.js';

router.get('/getContacts', getAllContacts);
router.get('getContact/:id', getContact);
router.post('/createContact', createContact);
router.put('/updateContact/:id', updateContact)
router.delete('/deleteContact/:id', deleteContact)

export { router as contactRoutes };
