import React, {Component} from 'react';
import ListItemCar from '../listitem/ListItemCar';
import './ListCarsComponent.css';

class ListCarsComponent extends Component {


    render = () => {
        const cars = this.props.cars;
        return (
          <div className="container">
            <h3 className="center">Our cars</h3>
              <div className="box">
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