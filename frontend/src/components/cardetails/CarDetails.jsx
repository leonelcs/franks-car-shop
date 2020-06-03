import React, {Component} from 'react';
import Price from '../price/Price';
import './CarDetails.css';

class CarDetails extends Component {
    render = () => {
        const car = this.props.car;
        return (
            <div class="row">
                <div class="col-3 col-s-3 menu">
                    <ul>
                        <li>Make: {car.make}</li>
                        <li>Model: {car.model}</li>
                        <li>Year: {car.yearModel}</li>
                        <li>Price: <Price price={car.price} /></li>
                            

                    </ul>
                </div>

                <div class="col-6 col-s-9">
                    <h1>The Car</h1>
                    <p>This {car.make} {car.model} - {car.yearModel} is unique deal, almost new, this is the best purchase you can do today</p>
                </div>

                <div class="col-3 col-s-12">
                    <div class="aside">
                        <h2>Where?</h2>
                        <p>You can find this car on our {car.warehouse}</p>
                        <p>on the {car.locationName}</p>
                        <h2>Location:</h2>
                    </div>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe title="google_maps" width="400" height="400" id="gmap_canvas" src={`https://maps.google.com/maps?q=${car.location.latitude},${car.location.longitude}1&t=&z=1&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDetails;