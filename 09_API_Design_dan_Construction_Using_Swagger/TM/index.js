const express = require("express")

const app = express()
const port = 3000

app.use(express.json())

function generateNumber(name) {
    let total = 0

    for (let i = 0; i < name.length; i++) {
        total += name.charCodeAt(i)
    }

    return (total % 100) + 1
}

app.post("/", (req, res) => {
    const { nama, tebakan } = req.body

    const angkaBenar = generateNumber(nama)

    if (tebakan === angkaBenar) {
        return res.json({
            jawaban: `Benar sekali! Tebakannya adalah ${angkaBenar}.`
        })
    }

    if (tebakan > angkaBenar) {
        return res.json({
            jawaban: "Tebakanmu terlalu tinggi!"
        })
    }

    return res.json({
        jawaban: "Tebakanmu terlalu rendah!"
    })
})

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`)
})