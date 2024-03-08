// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors module
const bodyParser = require("body-parser");
const addressRoutes = require("./routes/addressRoutes");

const app = express();
const PORT = 3001;
app.use(cors());
const MONGODB_URI =
  "mongodb+srv://yash:yash1234@cluster0.my2i6zu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

app.use(bodyParser.json());

app.use("/api", addressRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
