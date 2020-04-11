const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  suggest: { type: String, required: true }, // we can also add default: "hello"
  content: { type: String, required: true },
  raffle: { type: String },
  intrested: { type: String },
  personalInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
  },

  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    tel: { type: String, required: true },
    email: { type: String, required: true },
  },

  liked: {
    student: { type: Boolean, required: true },
    location: { type: Boolean, required: true },
    campus: { type: Boolean, required: true },
    atmosphere: { type: Boolean, required: true },
    doreroom: { type: Boolean, required: true },
    sports: { type: Boolean, required: true },
  },
});

module.exports = mongoose.model("post", postSchema);
