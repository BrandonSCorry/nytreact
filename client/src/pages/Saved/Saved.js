import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API.js"
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";

const moment = require('moment');

class Saved extends Component {
  state = {
    articlesSaved: [],
    title: "",
    date: "",
    url: ""
  };
  componentDidMount() {
    this.loadSavedArticles();
  }

  loadSavedArticles = () => {
    API.getArticles()

      .then(res => this.setState({articlesSaved: res.data, title: "", date: "", url: ""}))
      .catch(err => console.log(err));
    console.log(this.state.articlesSaved);

  }

  // deleteArticle = id => {
  //   API.deleteArticle(id)
  //     .then(res => this.loadSavedArticles())
  //     .catch(err => console.log(err));
  // };

  render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Saved Articles
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.articlesSaved.length ? (
              <List>
                {this.state.articlesSaved.map(article => (
                  <ListItem key={article._id}>
                    <a href={article.web_url} target='_blank'>
                      <strong>
                        {article.headline.main} by {article.byline.original} on {moment(article.pub_date).format("ddd, MMM Do YYYY, h:m a")}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.deleteArticle(this.target._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No saved articles yet!</h3>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/"> Back to Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}



export default Saved;
