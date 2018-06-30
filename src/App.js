import React, { Component } from 'react';
import Link from "./components/Link";
import Name from "./components/Name";
import Container from "./components/Container.js";
import Header from "./components/Header.js";
import LinkBox from "./components/LinkBox.js";
import MainPage from "./components/MainPage.js";
import Row from "./components/Row.js";
import BigColumn from "./components/BigColumn.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
      <Row>
      <Header>
      <Name>
      tawny cataldo
      </Name>
      <LinkBox>
      <Link link={"/"} linkName={"about"}></Link>
      <Link link={"/"} linkName={"work"}></Link>
      <Link link={"/"} linkName={"contact"}></Link>
      </LinkBox>
      </Header>
      </Row>
      </Container>
      );
  }
}

export default App;
