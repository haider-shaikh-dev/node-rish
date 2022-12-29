const express = require('express')
const router = express.Router();
const UserController = require('../controller/UserController')


router.get('/',UserController.getUser);
router.post('/',UserController.postUsers);

module.exports = router;