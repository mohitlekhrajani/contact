const mongoose = require("mongoose");

// Define the schema for the contact details
const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email addresses are unique in the collection
  },
  message: {
    type: String,
  
  },
  reason: {
    type: String,
    
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets to the current date and time
  },
});

// Create the model from the schema
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
