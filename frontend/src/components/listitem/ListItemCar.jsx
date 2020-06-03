import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Price from '../price/Price';

class ListItemCar extends Component {

    render = () => {
        const car = this.props.car;
        console.log(this.props.addedItems);
        return (

            <div className="card" key={car.id}>
                    <div className="card-image">
                        <img src="images/default-pict.png" alt="images/default-pict.png" />
                        <span className="card-title">{car.make} - {car.model} - {car.yearModel}</span>
                        <DetailsButton car={car} ></DetailsButton>
                    </div>

                    <div className="card-content">
                        <p>Since: {car.dateAdded}</p>
                        <p><b>Price: <Price price={car.price} /></b></p>
                    </div>
            </div>
        );  
    }

}

function DetailsButton(props) {
    const selectedCar = props.car;
    const isLicensed = selectedCar.licensed;

    if (isLicensed) {
        // return ( <Link className="button" to={`/car/${selectedCar.slug}`}><Button className="button" variant="secondary">See More</Button></Link> );
        return ( <Link className="button" to={`/car/${selectedCar.slug}`}><span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">details</i></span></Link> );
    } else {
        return ( <span to="/" className="btn-floating halfway-fab waves-effect waves-light grey"><i className="material-icons">lock</i></span> );
    }
}

export default ListItemCar;