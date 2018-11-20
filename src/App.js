import React, { Component } from 'react';
import PeopleList from './People'

class App extends Component {
  render() {
    return (
      <div className="container">
        <img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png" alt="Star wars" className="brand" />
        <PeopleList />
      </div>
    )
  }
}

export default App;
