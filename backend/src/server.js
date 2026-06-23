const dotenv = require("dotenv");
dotenv.config(); 

const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/connectDB");
const categoryRoutes = require("./routes/categoryRoutes");
const dsaRoutes = require("./routes/dsaRoutes")
const projectRoutes = require("./routes/projectRoutes")

const app = express();

app.use(cors());
app.use(express.json());

connectDB();


app.use("/categories", categoryRoutes);
app.use("/dsa", dsaRoutes);
app.use("/projects",projectRoutes);
app.listen(5000, () => {
  console.log("Server running on port 5000");
});