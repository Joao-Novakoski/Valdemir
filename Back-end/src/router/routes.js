const router = require("express").Router();

const articleRouter = require("./articleRouter");
const categoryRouter = require("./categoryRouter");
const subArticleRouter = require("./subArticleRouter");
const userRouter = require("./userRouter");

router.use("/article", articleRouter);

router.use("/category", categoryRouter);

router.use("/subArticle", subArticleRouter);

router.use("/user", userRouter);

module.exports = router;
