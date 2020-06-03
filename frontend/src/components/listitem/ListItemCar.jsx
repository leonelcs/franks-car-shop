import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Price from '../price/Price';
import './ListItemCar.css';

class ListItemCar extends Component {

    render = () => {
        const car = this.props.car;
        return (
                <div>
                    <Card className="bg-dark text-white">
                    <Card.Img className="photo" src="images/default-pict.png" />
                    <Card.ImgOverlay>
                        <Card.Title className="overlay-title" >{car.make} - {car.model} - {car.yearModel}</Card.Title>
                        <Card.Subtitle className="overlay-subtitle" >Since {car.dateAdded}</Card.Subtitle>
                        <Card.Text className="overlay-text" ><Price price={car.price} /></Card.Text>
                    </Card.ImgOverlay>
                    </Card>
                    <DetailsButton car={car} ></DetailsButton>
                </div>
        );
    }

}

function DetailsButton(props) {
    const selectedCar = props.car;
    const isLicensed = selectedCar.licensed;

    if (isLicensed) {
        return ( <Link className="button" to={`/car/${selectedCar.slug}`}><Button className="button" variant="secondary">See More</Button></Link> );
    } else {
        return ( <Button className="button" variant="outline-secondary" disabled>Not Available</Button> );
    }
}

export default ListItemCar;