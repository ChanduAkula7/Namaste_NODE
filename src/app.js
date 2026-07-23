const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const router = express.Router();
//this wikk register an middleware for all the routes which are registered in this router
app.use("/api", router);

router.use((req, res, next) => {
  console.log("middleware is running---Pre-chcek has done");
  next();
});

//want to add global error handling middleware

router.get("/user", (req, res) => {
  throw new Error("KABDCBASDHY");
  res
    .status(200)
    .json({ message: "user is responding-router", HELLO: "hello" });
});

//wild card of error handling middleware
//always keep on end of the excection
app.use("/", (err, req, res, next) => {
  if (err) {
    res
      .status(500)
      .json({ message: "something went wrong", error: err.message });
  }
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
