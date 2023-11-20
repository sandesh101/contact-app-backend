import express from 'express';
import dotenv from 'dotenv';
import { routes }  from './route.js';
import { errorHandler } from './middlewares/errorHandlers.js';

const app = express();

dotenv.config({
    path: './env',
})

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use('/api', routes)
app.use(errorHandler)

app.listen(PORT, (() => console.log(`Server is listening at ${PORT}`)));