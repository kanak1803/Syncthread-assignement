const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const dummyUser = {
  username: "user1",
  password: "password123", // Normally, this should be hashed
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match the dummy data
  if (username === dummyUser.username && password === dummyUser.password) {
    // Create a JWT token
    const token = jwt.sign({ username }, "your_secret_key", { expiresIn: "1h" });
    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
