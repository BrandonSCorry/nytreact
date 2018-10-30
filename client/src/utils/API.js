import axios from "axios";

const url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles/", articleData);
  },
  // Search nyt api with form input
  searchArticles: function(search, start, end) {
    const searchTerm = `&q=${search}&sort=newest`;

    const startDate = `&begin_date=${start}0101`;

    const endDate = `&end_date=${end}0101`;

    let searchQuery = searchTerm;

    (start && end) ? searchQuery += startDate + endDate : start ? searchQuery += startDate : end ? searchQuery += endDate : searchQuery = searchTerm ;

    console.log(searchQuery);


    return axios.get(url + searchQuery);
  }
};
