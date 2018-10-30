const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the articles

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytreact"
);

const articleSeed = [
  {
    title: "Test Article #1",
    date: "10/12/2018",
    url:
      "www.testing-db-nyt-search.com"
  },
  {
    title: "Test Article #2",
    date: "10/13/2018",
    url:
      "www.testing-again-db-nyt-search.com"
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
