const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Import cors middleware
const mongoose = require('mongoose'); // Import mongoose
require('dotenv').config(); // Import dotenv for environment variables

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(cors()); // Use cors middleware to allow cross-origin requests

// Connect to MongoDB (local instance)
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Import userRoutes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Mock user database (replace with actual database integration)
const users = [];

// Register route
app.post('/api/users/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Check if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds: 10

  // Store user in mock database (replace with database logic)
  users.push({ email, password: hashedPassword });

  return res.status(200).json({ message: 'User registered successfully' });
});

// Login route
app.post('/api/users/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Credentials not found' });
  }

  // Compare passwords
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  // Passwords match, generate JWT token
  const token = jwt.sign({ email: user.email }, 'your_secret_key', { expiresIn: '1h' });

  // Return token as response
  return res.status(200).json({ message: 'Login successful', token });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


