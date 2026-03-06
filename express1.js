const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  // res.send("<p>This is from first middleware</p>");
  next();
});

app.post("/submit-details",(req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>This is from second middleware</p>");
});

app.use("/",(req, res, next) => {
  console.log("Came in another middleware", req.url, req.method);
  res.send("<p>This is from another middleware</p>");
  next();
});



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})