import React, {Component} from 'react';
import ListItemCar from '../listitem/ListItemCar';
import './ListCarsComponent.css';

class ListCarsComponent extends Component {


    render = () => {
        const cars = this.props.cars;
        return (
            <div>
              <div>
                <center><h4>Cars List</h4></center>
              </div>
              <div className="grid-container">
              {cars.map((car) => (
                <div className="grid-item" key={car.slug}>
                  <ListItemCar car={car} ></ListItemCar>
                </div>
              ))}
              </div>
            </div>
          )

    }
}

export default ListCarsComponent;