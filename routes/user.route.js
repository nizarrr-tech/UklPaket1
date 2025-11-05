const express = require("express")
const app = express()

app.use(express.json())

const usercontroller = require(`../controller/user.controller`);
const authcontroller = require(`../controller/auth.controller`)

app.get("/", authcontroller.authorize, usercontroller.getAllUser)
app.get("/:id", authcontroller.authorize, usercontroller.getUser)
app.post("/", authcontroller.authorize, usercontroller.addUser)
app.put("/:id", authcontroller.authorize, usercontroller.updateUser)

module.exports = app