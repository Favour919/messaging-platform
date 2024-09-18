const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const messageRoutes = require('./routes/messages');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/messaging-platform', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});