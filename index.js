const express = require("express")

const app = express()
const PORT = 8000

app.get("/", (req, res) => {
    res.send("Welcome to basic express application")
})

app.listen(PORT, () => console.log(`Server Started at http://localhost:${PORT}`))