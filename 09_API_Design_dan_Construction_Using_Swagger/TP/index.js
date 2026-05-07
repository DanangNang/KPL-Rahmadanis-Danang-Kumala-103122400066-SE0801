const express = require("express")
const swaggerUi = require("swagger-ui-express")
const swaggerJsdoc = require("swagger-jsdoc")

const app = express()
const port = 3000

const menu = {
    bakmi: [
        {
            nama: "Bakmi ayam",
            harga: 23000
        }
    ],

    rice: [
        {
            nama: "Nasi goreng",
            harga: 20000
        }
    ],

    drink: [
        {
            nama: "Es teh",
            harga: 5000
        }
    ]
}

/**
 * @swagger
 * /menu/{category}:
 *   get:
 *     summary: Menampilkan menu berdasarkan kategori
 */
app.get("/menu/:category", (req, res) => {
    const category = req.params.category

    if (!menu[category]) {
        return res.status(404).json({
            pesan: "Kategori tidak ditemukan"
        })
    }

    res.json(menu[category])
})

/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Menampilkan semua kategori menu
 *     responses:
 *       200:
 *         description: Berhasil menampilkan kategori menu
 */
app.get("/menu", (req, res) => {
    const kategori = Object.keys(menu)
    res.json(kategori)
})

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Menu",
            version: "1.0.0"
        }
    },
    apis: ["./index.js"]
}

const specs = swaggerJsdoc(options)

app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs))

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`)
})