const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/userModel");
const jwt = require("jsonwebtoken");

const authMiddleware = require("./auth");

app.use(express.json());
app.use(cors());
const JWT_SECRET = "secret";

const URI =
  "mongodb+srv://rizulthakur:passwordofrizul@cluster1.t7bdju3.mongodb.net/moviestic?retryWrites=true&w=majority";
mongoose
  .connect(URI)
  .then(() => {
    app.listen(3001, () => {
      console.log(`Connected to DB & Server running on PORT 3001`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await UserModel.findOne({ email: email });
  if (user) {
    return res.json({ message: "Already Exists, Please Login!", key: 0 });
  }
  const newUser = new UserModel({
    name: name,
    email: email,
    password: password,
  });
  await newUser.save();

  res.json({ message: `User Register Successful: ${newUser.name}`, key: 1 });
});cd

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email, password: password });

  if (!user) {
    return res.json({ message: "User Doesnot Exist, Please Login", key: 0 });
  }

  jwt.sign(user.email, JWT_SECRET, (err, token) => {
    if (err) throw err;
    res
      .status(200)
      .json({ message: `Login Success: ${user.name}`, key: 1, token: token });
    console.log("token :: " + token);
  });
});

app.get('/yourPicks', authMiddleware, async (req, res) => {
  try {
    const email = req.user;
    const user = await UserModel.findOne({ email }); // Find the user in the database using their email

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the movie picks associated with the user's email
    res.json({ message: 'Protected route accessed successfully', myPicks: user.myPicks });
  } catch (err) {
    console.error('Error fetching movie picks:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});