const path = require("path");
const express = require("express");

const userRouter = express.Router();

const rootDir = require("../utils/pathUtil");
const {hostedHomes} = require("./hostRouter")


userRouter.get("/", (req, res, next)=>{
  res.render("user", {hostedHomes});
})

module.exports = userRouter;