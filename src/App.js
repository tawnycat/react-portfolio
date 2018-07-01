import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Name from "./components/Name";
import Container from "./components/Container.js";
import Header from "./components/Header.js";
import LinkBox from "./components/LinkBox.js";
import MainPage from "./components/MainPage.js";
import Row from "./components/Row.js";
import './App.css';

class App extends Component {

  constructor(props) {
      super(props)

    this.state = {wordSize: "", containerClass: "verticalAlign container"}
  }

  nameShrink = () => {
    this.setState({wordSize: "nameSmall", containerClass: "verticalAlign.active container"})
  }

  render() {
    return (
      <Router>
      <Container containerClass={this.state.containerClass}>
      <Row>
      <Header>
      <Name className={this.state.wordSize}>
      tawny cataldo
      </Name>
      <LinkBox>
      <Link to={"/about"} onClick={this.nameShrink} className="m-3">about</Link>
      <Link to={"/work"} onClick={this.nameShrink} className="m-3">work</Link>
      <Link to={"/contact"} onClick={this.nameShrink} className="m-3">contact</Link>
      </LinkBox>
      </Header>
      </Row>
      <Row>
      <Route component={MainPage}>
      </Route>
      </Row>
      </Container>
      </Router>
      );
  }
}

export default App;
