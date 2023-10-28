const { questionService } = require("../services");
const { tokenMiddleware } = require("../utils/middleware");
const { wrapper } = require("../utils/wrapper");

const router = require("express").Router();

router.post("/add", tokenMiddleware,wrapper(async(req, res) => {
    const question = await questionService.addQuestion(req.body);
    return res.json({question});
}));

module.exports = router;