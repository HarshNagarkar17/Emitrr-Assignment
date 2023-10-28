const router = require("express").Router();
const { userService } = require("../services");
const {tokenMiddleware} = require("../utils/middleware");
const { wrapper } = require("../utils/wrapper");

router.post("/home",tokenMiddleware, wrapper(async(req, res) => { 
  const user = await userService.findUserById(req.user.sub);
  res.json({user});
}))

router.post("/isAdmin", tokenMiddleware, wrapper(async(req, res) => {
    const user = await userService.findUserById(req.user.sub);
    if(user.isAdmin)
        return res.json({isAdmin:true})
    return res.json({isAdmin:false});
}))
module.exports = router;
