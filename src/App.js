import React, { Component } from 'react';
import Link from "./components/Link";
import Name from "./components/Name";
import Container from "./components/Container.js";
import Header from "./components/Header.js";
import LinkBox from "./components/LinkBox.js";
import MainPage from "./components/MainPage.js";
import Row from "./components/Row.js";
import Column from "./components/Column.js";
import './App.css';

class App extends Component {

  constructor(props) {
      super(props)

    this.state = {wordSize: ""}
  }

  nameShrink = () => {
    this.setState({wordSize: "nameSmall"})
  }

  render() {
    return (
      <Container>
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
