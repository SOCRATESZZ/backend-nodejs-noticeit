const express = require('express');

const router = express.Router();

const chatController = require('../controller/chatController');

router.get('/get', chatController.getChats);

router.post('/post', chatController.postChat);




module.exports = router;