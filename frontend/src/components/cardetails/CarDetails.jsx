import React, {Component} from 'react';

class CarDetails extends Component {
    render = () => {
        const car = this.props.car;
        return (
            <div>
                <p>{car.id}</p>
                <p>{car.slug}</p>
                <p>{car.make}</p>
                <p>{car.model}</p>
                <p>{car.warehouse}</p>
                <p>{car.locationName}</p>
                <p>{car.id}</p>
                <p>{car.yearModel}</p>
                <p>{car.price}</p>
                <p>{car.licensed}</p>
                <p>{car.dateAdded}</p>
            </div>);
    }
}

export default CarDetails;