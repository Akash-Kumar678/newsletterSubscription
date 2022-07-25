const express= require("express");
const router = express.Router();
const {NewsController} = require('../controller/newsletterController')

router.post('/:email',NewsController)

module.exports = router