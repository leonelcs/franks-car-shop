import React, { Component } from 'react';
// import NavBar from './components/navbar/NavBar'
import './App.css';
import Main from './pages/Main';

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
      <div>
        <Main/>
      </div>
    );
  }
}

export default App;
