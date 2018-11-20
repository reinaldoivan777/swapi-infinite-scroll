import React, { Component } from 'react';
import PeopleList from './People'


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Star Wars People</h1>
        <PeopleList />
      </div>
    )
  }
}

export default App;
