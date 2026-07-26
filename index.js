const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
// 1. Add body-parsing middleware to read incoming form submissions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 2. Connect to MongoDB Atlas
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

// 3. Define Schemas & Models
const userSchema = new mongoose.Schema({
  username: { type: String, required: true }
});

const exerciseSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true }
});

const User = mongoose.model('User', userSchema);
const Exercise = mongoose.model('Exercise', exerciseSchema);

// 4. POST route to create a new user account
app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User({ username: req.body.username });
    const savedUser = await newUser.save();
    res.json({
      username: savedUser.username,
      _id: savedUser._id.toString()
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

// 5. GET route to list all created users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}, 'username _id');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});




const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
