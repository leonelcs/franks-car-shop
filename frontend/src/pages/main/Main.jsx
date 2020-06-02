import React, { Component } from 'react';
import ListCarsComponent from '../../components/listcars/ListCarsComponent';
import './Main.css';


class Main extends Component {

  render = () => {
    const cars = this.props.cars;
    return (
        <div>
            <div className="Main">
            <ListCarsComponent cars={cars}></ListCarsComponent>
            </div>
        </div>
    );
  }
}

export default Main;
