const path = require("path");
const express = require("express");
const hostRouter = express.Router();

const rootDir = require("../utils/pathUtil");

const hostedHomes = []
hostRouter.get("/add-home", (req, res, next)=>{
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});

hostRouter.post("/add-home", (req, res, next)=>{
  console.log("Home registered: ", req.body, req.body.houseName);
  hostedHomes.push(req.body.houseName);
  console.log(hostedHomes);
  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});

exports.hostRouter = hostRouter;
exports.hostedHomes = hostedHomes;