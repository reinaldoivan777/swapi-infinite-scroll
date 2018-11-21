import React, { Component } from 'react';
import PeopleList from './People'
import Navigation from './Navs/Navigation'
import { Container } from "reactstrap";
import './index.css'

class App extends Component {
  render() {
    return (
      <Container fluid>
        <header>
          <Navigation />
        </header>
        <div className="app-content">
          <PeopleList />
        </div>
      </Container>
    )
  }
}

export default App;
