const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from server");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
