const express = require("express")
const app = express()

app.use(express.json())

const attendanceController = require(`../controller/attendance.controller`);
const authController = require(`../controller/auth.controller`)

app.get("/", authController.authorize, attendanceController.getAllAttendance)
app.get("/:id", authController.authorize, attendanceController.getAttendances)
app.get("/summary/:id", authController.authorize, attendanceController.getSummary)
app.post("/", 
    
    
        authController.authorize, attendanceController.addAttendance)
app.post("/analysis", authController.authorize, attendanceController.getAnalysis)

module.exports = app