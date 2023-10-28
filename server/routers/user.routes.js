const router = require("express").Router();
const {tokenMiddleware} = require("../utils/middleware")

router.post("/home",tokenMiddleware, async(req, res) => { 
  res.json({user: req.user});
})

module.exports = router;
