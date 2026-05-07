import { specs, swaggerUi } from 'swagger.js';

const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use("/docs", swaggerUi, serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /:
 *  get:
 *   summary: Menampilkan pesan Hello World
 *      responses:
 *          200:
 *              description: Pesan berhasil ditampilkan
 */

const PORT = 8000;
const HOSTNAME = "localhost";

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Hello World!"
    });
});

const filmData = [];

app.get('/film', (req, res) => {
    return res.status(200).json(filmData);
});

app.post('/film', (req, res) => {
    const filmBaru = {
        id: filmData.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year
    }
    filmData.push(filmBaru);
    return res.status(201).json(filmBaru);
});

app.listen(PORT, HOSTNAME, () => console.log(`Peladen berjalan di ${HOSTNAME}:${PORT}`));