import jwt from "jsonwebtoken";


const dummyUser = {
  username: "admin",
  password: "admin123",
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (username !== dummyUser.username || password !== dummyUser.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { username: dummyUser.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.json({ token });
};
