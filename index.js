const express = require("express");
const bodyParser = require("body-parser");
const Contact = require("./contact.js"); // Update this path to where your Contact model is located
const connectDB = require("./db.config.js");
const cors = require("cors");

// Initialize Express app
const app = express();
const port = 3000 || process.env.PORT; // You can use any port that is free

connectDB();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors()); 

// POST API to create a new contact
app.get("/", (req, res) => {
  res.json({ message: "Testing Contact  Json" });
});
app.post("/contacts", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).send(savedContact);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
