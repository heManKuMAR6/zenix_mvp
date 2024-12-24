const admin = require('../config/firebase');

// Register a new user
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Dummy login logic (Firebase Admin cannot handle passwords directly)
exports.loginUser = async (req, res) => {
  const { email } = req.body;

  try {
    // Simulate user lookup
    const user = await admin.auth().getUserByEmail(email);
    res.status(200).json({ message: 'User logged in successfully', user });
  } catch (error) {
    res.status(404).json({ message: 'User not found' });
  }
};
