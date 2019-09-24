/* 
  A Mongoose schema defines the structure of the document, 
  default values, validators, etc.
*/

const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  user: {
    // associate every contact with a user in the users collection
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: 'personal'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('contact', ContactSchema);
