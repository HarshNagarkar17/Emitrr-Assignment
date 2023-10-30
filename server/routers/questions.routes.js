const { User, Results } = require("../models");
const { questionService } = require("../services");
const { CustomError } = require("../utils/customError");
const { tokenMiddleware } = require("../utils/middleware");
const { wrapper } = require("../utils/wrapper");

const router = require("express").Router();

router.post("/add", tokenMiddleware, wrapper(async (req, res) => {
  const question = await questionService.addQuestion(req.body);
  return res.json({ question });
}));

router.post("/:language/:level", wrapper(async (req, res) => {
  const questions = await questionService.getQuestions(req.params.language, req.params.level);
  return res.json({ questions });
}))

router.post("/score", wrapper(async (req, res) => {
  const username = req.body.user;
  const score = req.body.score;
  const user = await User.findOne({ username });
  let gameCompleted = false;
  if (req.body.level === 'intermediate' || req.body.level === 'experienced') {
    if (score >= 30) {
      gameCompleted = true;
    }
    if (score > 20)  // if score is more than 20 than he can be promoted to experienced level
      user.level = "experienced";
    user.score = score; // update score to current score. previous score will be removed which is fine. coz we want to store score for current level;
    await user.save();
  } else {
    if (score > 10) // if score is more than 10 it means user can be promoted to intemediate level
      user.level = "intermediate";
    user.score = score;
    await user.save();
  }
  const alreadyGiven = await Results.findOne({ username, language: req.body.language, level: req.body.level });
  if (alreadyGiven) { // if the same user has already given the exam then just update that score instead of creating new document
    alreadyGiven.score = score;
    await alreadyGiven.save();
  } else {
    await Results.create({ username, score, language: req.body.language, level: req.body.level });
  }
  const results = await Results.find({ language: req.body.language, level: req.body.level }).sort({ score: -1 });
  return res.json({ status: "success", results, gameCompleted })
}))
router.post("/nextQuestion", wrapper(async (req, res) => {
  const { questions, currentQuestion, currentAnswer } = req.body;
  // making sure not to send already answered question
  let remainingQuestions = questions.filter(question => question._id !== currentQuestion._id);

  // Check the user's performance
  const rightAnswer = currentQuestion.details[2];
  const userIsPerformingWell = currentAnswer === rightAnswer;
  if (userIsPerformingWell) {
    // If the user is performing well, send a harder question
    remainingQuestions = findHarderQuestion(remainingQuestions);
  } else {
    // If the user is not performing well, send an easier question
    remainingQuestions = findEasierQuestion(remainingQuestions);
  }
  res.json({ questions: remainingQuestions, correctOrNot: userIsPerformingWell }); // sending remainingQuestions to reduce computation to traverse entire questions again
}));

function findEasierQuestion(questions) {
  questions.sort((a, b) => a.score - b.score);
  return questions;
}

function findHarderQuestion(questions) {
  questions.sort((a, b) => b.score - a.score);
  return questions;
}

module.exports = router;