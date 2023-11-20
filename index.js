import express from 'express';
import dotenv from 'dotenv';

const app = express();

dotenv.config({
    path: './env',
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, (() => console.log(`Server is listening at ${PORT}`)));