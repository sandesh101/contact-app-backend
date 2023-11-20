import express from 'express';
import dotenv from 'dotenv';
import { routes }  from './route.js';

const app = express();

dotenv.config({
    path: './env',
})

const PORT = process.env.PORT || 5000;

app.use('/api', routes)

app.listen(PORT, (() => console.log(`Server is listening at ${PORT}`)));