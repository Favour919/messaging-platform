const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Message = require('../models/message');

router.post('/', auth, async (req, res) => {
  const { receiver, content } = req.body;
  const message = new Message({ sender: req.user.id, receiver, content });
  await message.save();
  res.status(201).send(message);
});

router.get('/', auth, async (req, res) => {
  const messages = await Message.find({ $or: [{ sender: req.user.id }, { receiver: req.user.id }] })
    .populate('sender', 'username')
    .populate('receiver', 'username');
  res.send(messages);
});

module.exports = router;