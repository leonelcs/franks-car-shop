import React, {Component} from 'react';
import ListItemCar from '../listitem/ListItemCar';
import './ListCarsComponent.css';

class ListCarsComponent extends Component {


    render = () => {
        const cars = this.props.cars;
        return (
            <div>
              <div>
                <center><h1>Cars List</h1></center>
              </div>
              <div className="grid-container">
              {cars.map((car) => (
                <div className="grid-item">
                  <ListItemCar car={car} ></ListItemCar>
                </div>
              ))}
              </div>
            </div>
          )

    }
}

export default ListCarsComponent;