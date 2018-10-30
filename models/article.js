// Article model

// Require mongoose
const mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the noteSchema with the schema object
const articleSchema = new Schema({
  // TODO: article ID to associate later?
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: false
  },
  url: {
    type: String,
    required: false
  }
});

// Create the Note model using the noteSchema
const Article = mongoose.model("Article", articleSchema);

// Export the Note model
module.exports = Article;
