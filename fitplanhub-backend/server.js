require("dotenv").config();  
const { protect } = require("./middleware/authMiddleware");
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());


const planRoutes = require("./routes/planRoutes");
const userRoutes = require("./routes/userRoutes");

connectDB();

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/users", userRoutes);



app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: "You accessed a protected route 🎉",
    user: req.user
  });
});


app.get("/", (req, res) => {
  res.send("FitPlanHub Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
