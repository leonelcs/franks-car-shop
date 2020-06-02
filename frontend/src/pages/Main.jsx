import React, { Component } from 'react';
import ListCarsComponent from '../components/listcars/ListCarsComponent';
import './Main.css';
import ShopHeader from '../components/header/ShopHeader';


class Main extends Component {
  constructor () {
    super();
    this.state = {
      cars: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/cars')
      .then(res => res.json())
      .then((data) => {
        this.setState({ cars: data })
      })
      .catch(console.log)
  }

  render = () => {
    const cars = this.state.cars;
    return (
        <div>
            <ShopHeader title="Frank's Car Shop" subtitle="Here you find your best deal" />
            <div className="Main">
            <ListCarsComponent cars={cars}></ListCarsComponent>
            </div>
        </div>
    );
  }
}

export default Main;
