import React, { Component } from 'react';
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Name from "./components/Name.js";
import Container from "./components/Container.js";
import Header from "./components/Header.js";
import LinkBox from "./components/LinkBox.js";
import AboutPage from "./components/AboutPage.js";
import WorkPage from "./components/WorkPage.js";
import ContactPage from "./components/ContactPage.js";
import Row from "./components/Row.js";
import './App.css';

class App extends Component {

  constructor(props) {
      super(props)

    this.state = {wordSize: "",     
    show: false,
    entered: false}
  }

  nameShrink = () => {
    this.setState({wordSize: "nameSmall"})
  }

  render() {
    const TransitionWrapper = withRouter(({ location }) => (
     <TransitionGroup>
      <CSSTransition key={location.key}             
            in={this.state.show}
            timeout={1000}
            unmountOnExit
            >
      <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/work" component={WorkPage} />
      <Route path="/contact" component={ContactPage} />
      </Switch>
      </CSSTransition>
      </TransitionGroup>
      ))


    return (
      <Router>
      <Container>
      <Row>
      <Header>
      <Name className={this.state.wordSize}>
      tawny cataldo
      </Name>
      <LinkBox>
      <Link to={"/about"} onClick={this.nameShrink} className="m-3 topLink">about</Link>
      <Link to={"/work"} onClick={this.nameShrink} className="m-3 topLink">work</Link>
      <Link to={"/contact"} onClick={this.nameShrink} className="m-3 topLink">contact</Link>
      </LinkBox>
      </Header>
      </Row>
      <Row>
      <TransitionWrapper />
      </Row>
      </Container>
      </Router>
      );
  }
}

export default App;
