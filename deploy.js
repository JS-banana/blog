const express = require("express")
const cors = require("cors")
const fs = require("fs")
const path = require("path")

const app = express()

app.use(cors())

app.use(express.static(path.resolve(__dirname, "./public")))

app.get("*", function (req, res) {
    const html = fs.readFileSync(
        path.resolve(__dirname, "./docs/.vuepress/dist/index.html"),
        "utf-8"
    )
    res.send(html)
})

app.listen(4001)
