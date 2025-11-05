const express = require("express")
const app = express()

app.use(express.json())

const authController = require(`../controller/auth.controller`);

app.post("/", authController.authenticate)
app.get("/", authController.authorize)

module.exports = app