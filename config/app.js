const path = require("path")
const express = require("express")
const cors = require("cors");
const app = express()
const router = require(path.resolve("routes"))
const db = require(path.resolve("config/dbConnection"))

app.use(express.json())
app.use(cors())

// Load Routes
router(app)

module.exports = app
