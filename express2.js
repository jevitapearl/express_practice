const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) =>{
  console.log("First middleware", req.url, req.method);
  next();
})

app.use((req, res, next)=>{
  console.log("Second middleware", req.url, req.method);
  next();
})

app.use(bodyParser.urlencoded())

app.use((req, res, next)=>{
  console.log("Third middleware", req.url, req.method);
})