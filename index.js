import express from 'express';

const app = express();

const PORT = 5000;

app.listen(PORT, (() => console.log(`Server is listening at ${PORT}`)));