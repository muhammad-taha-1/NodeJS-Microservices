const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", UserSchema);

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error("Error Saving User: ", err);
    res.status(500).json({ error: "Internel Server Error" });
  }
});

mongoose
  .connect("mongodb://mongo:27017/users")
  .then(() => console.log("Connected to MongoDb"))
  .catch((err) => console.error("MongoDb Connection error", err));

app.listen(port, () => {
  console.log(`User Service listening on port ${port}`);
});
