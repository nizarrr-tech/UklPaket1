const express = require("express");
const app = express();
const PORT = 8000;

// Tambahkan ini supaya request dari Postman bisa dibaca sebagai JSON
app.use(express.json());

// Import semua route
const userRoute = require("./routes/user.route");
const attendanceRoute = require("./routes/attendance.route");
const authRoute = require("./routes/auth.route");

// Gunakan route
app.use("/user", userRoute);
app.use("/attendance", attendanceRoute);
app.use("/auth", authRoute);

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server of UKL runs on port ${PORT}`);
});
