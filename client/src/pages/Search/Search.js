import React, { Component } from "react";
import { Link } from "react-router-dom";
import SaveBtn from "../../components/SaveBtn";

import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

import API from "../../utils/API"

const moment = require('moment');

class Search extends Component {
  state = {
    articles: [],
    title: "",
    date: "",
    url: "",
    topic: "",
    start: "",
    end: "",
    output: false
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchArticles(this.state.topic, this.state.start, this.state.end)
      .then(res => {
        this.setState ({
          articles: res.data.response.docs,
          output: true
        })
        console.log(this.state.articles);

      })
      .catch(err => console.log(err));
  };

  handleSave = (event, id) => {
    event.preventDefault();
    API.saveArticle({
      title: this.state.articles.headline.main,
      date: this.state.articles.pub_date,
      url: this.state.articles.web_url
    })
      .then(res => alert('Article saved successfully!'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>New York Times Article Search</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (Required)"
              />
              <Input
                value={this.state.start}
                onChange={this.handleInputChange}
                name="start"
                placeholder="Start Date (Optional)"
              />
              <Input
                value={this.state.end}
                onChange={this.handleInputChange}
                name="end"
                placeholder="End Year (Optional)"
              />
              <FormBtn
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}
              >
                Search NYT
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Search Results</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                      <a href={article.web_url} target='_blank'>
                        <strong>
                          {article.headline.main} on {moment(article.pub_date).format("ddd, MMM Do YYYY, h:m a")}
                        </strong>
                      </a>
                    <SaveBtn onClick={() => this.handleSave} />
                  </ListItem>
                  ))}
                  </List>
                  ) : (
                  <h3>No Results to Display</h3>
                  )}
              </Col>
              </Row>
              </Container>
              );
            }
            }

            export default Search;