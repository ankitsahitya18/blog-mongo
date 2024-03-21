const path = require("path")
const express = require("express")
const cors = require("cors");
const app = express()
const router = require(path.resolve("routes"))

app.use(express.json())
app.use(cors())

// Load Routes
router(app)

module.exports = app
