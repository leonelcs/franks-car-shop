import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import './ListItemCar.css';

function ListItemCar(props) {
    const car = props.car;

    return (
        <Accordion defaultActiveKey={car.id}>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <Card.Img className="thumbnail" src="images/alonsos-car-gp-brazil.jpg" thumbnail />
                    <p>{car.make} - {car.model} - {car.yearModel}</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Card.Img className="photo" src="images/alonsos-car-gp-brazil.jpg" />
                    <h5 className="card-title">{car.make} - {car.model} - {car.yearModel}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{car.price}</h6>
                    <p>{car.dateAdded}</p>
                    <p>{car.warehouse}</p>
                    <p>{car.locationName}</p>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}        

export default ListItemCar;