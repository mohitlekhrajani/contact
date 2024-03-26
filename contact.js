const mongoose = require("mongoose");

// Define the schema for the contact details
const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email addresses are unique in the collection
  },
  phoneNumber: {
    type: String,
    required: false, // Make this optional
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets to the current date and time
  },
});

// Create the model from the schema
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
