const express = require("express");
const router = express.Router();
const userRoute = require('./userRoute');
const accountRouter = require('./accountRouter');

router.use("/user", userRoute);  // all requtes that come to /api/v1/user now will redirected to userRoute where we have written logic to what to do
router.use("/account", accountRouter);
module.exports = router;
