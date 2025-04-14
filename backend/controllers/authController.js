import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const jwtSecret = process.env.JWT_SECRET;

const dummyUser = {
  username: "user1",
  password: "password123", // Normally, this should be hashed
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match the dummy data
  if (username === dummyUser.username && password === dummyUser.password) {
    // Create a JWT token
    const token = jwt.sign({ username }, jwtSecret, {
      expiresIn: "1h",
    });
    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
};
