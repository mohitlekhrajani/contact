const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Contact = require("./contact.ts"); // Update this path to where your Contact model is located
const connectDB = require("./db.config.ts");

// Initialize Express app
const app = express();
const port = 3000; // You can use any port that is free

connectDB();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST API to create a new contact
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
