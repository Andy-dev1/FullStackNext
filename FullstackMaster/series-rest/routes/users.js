const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const jwtSecret = "abc123abc123abc123";
router.use(async (req, res, next) => {
  const token =
    req.headers["x-access-token"] || req.body.token || req.query.token;

  if (token) {
    try {
      const payload = jwt.verify(token, jwtSecret);
      
      if(payload.roles.indexOf("admin")>=0){
        next();
      }else{
        res.send({ success: false });
      }
      
    } catch (error) {
      res.send({ success: false });
    }
  } else {
    res.send({ success: false, message: "Failed to auth" });
  }
  
});

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});
module.exports = router;
