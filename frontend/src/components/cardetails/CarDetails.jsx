import React, {Component} from 'react';
import Price from '../price/Price';


class CarDetails extends Component {
    render = () => {
        const car = this.props.car;
        return (
            <div className="card" key={car.id}>
                    <div className="card-image">
                        <img src={require("../../images/default-pict.png")} alt="images/default-pict.png" />
                        <span className="card-title">{car.make} - {car.model} - {car.yearModel}</span>
                    </div>

                    <div className="card-content">
                        <p>Since: {car.dateAdded}</p>
                        <p><b>Price: <Price price={car.price} /></b></p>
                        <h3>Where can you find this car?</h3>
                        <p>This car is available for a test drive at {car.warehouse} in the {car.locationName}</p>
                        <h3>Is this car licensed to use?</h3>
                        <p>Yes! The cars you see as locked are in fact the not licensed yet</p>
                    </div>
            </div>
        );
    }
}

export default CarDetails;