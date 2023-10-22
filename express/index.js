const express = require("express");
const app = express();

app.get("/", (req, res) => {
    // console.log(req);
  res.json("////");
});
app.get("/home", (req, res) => {
  res.json({
    name: "vipin",
    method: req.method,
  });
});

app.post("/", (req, res) => {
//   console.log("body");
  res.send(" body" );
});
app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
