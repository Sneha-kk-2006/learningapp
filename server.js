const express = require("express");
const path = require("path");
const cors = require("cors");
require("./backened/db");

const userRoutes = require("./backened/routes/userRoutes");
const courseRoutes = require("./backened/routes/courseRoutes");

const app = express();
app.use(cors());
app.use(express.json());
// serve static files
app.use(express.static(path.join(__dirname, "frontened")));

// default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontened", "index.html"));
});


app.use("/api", userRoutes);
app.use("/api", courseRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});