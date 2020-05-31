import React, {Component} from 'react'
import ListItemCar from './ListItemCar'

class ListCarsComponent extends Component {


    render = () => {
        const cars = this.props.cars;
        return (
            <div>
              <center><h1>Cars List</h1></center>
              {cars.map((car) => (
                <ListItemCar car={car} ></ListItemCar>
              ))}
            </div>
          )

    }
}

export default ListCarsComponent;