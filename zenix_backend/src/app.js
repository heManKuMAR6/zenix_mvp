const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for JSON parsing
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const rewardsRoutes = require('./routes/rewards');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/rewards', rewardsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
