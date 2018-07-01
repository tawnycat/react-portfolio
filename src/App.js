import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Link from "./components/Link";
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
      <Container containerClass={this.state.containerClass}>
      <Row>
      <Header>
      <Name className={this.state.wordSize}>
      tawny cataldo
      </Name>
      <LinkBox>
      <Link link={"#"} linkName={"about"} onClick={this.nameShrink}></Link>
      <Link link={"#"} linkName={"work"} onClick={this.nameShrink}></Link>
      <Link link={"#"} linkName={"contact"} onClick={this.nameShrink}></Link>
      </LinkBox>
      </Header>
      </Row>
      </Container>
      );
  }
}

export default App;
