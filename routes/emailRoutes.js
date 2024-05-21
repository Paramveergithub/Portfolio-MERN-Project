const express = require("express");
// const { sendEmailController } = require('../controllers/portfolioController');

const router = express.Router();
const {sendEmail} = require("../controllers/emailController");

// routes
router.post('/sendEmail', sendEmail);


// export
module.exports = router;