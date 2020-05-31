import React, { Component } from 'react';
import ListCarsComponent from './components/cars/ListCarsComponent'
import './App.css';

class App extends Component {

  state = {
    cars: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/cars')
      .then(res => res.json())
      .then((data) => {
        this.setState({ cars: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <ListCarsComponent cars={this.state.cars}></ListCarsComponent>
      </div>
    );
  }
}

export default App;
