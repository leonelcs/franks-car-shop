import React, { Component } from 'react';
import CarDetails from '../../components/cardetails/CarDetails';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class DetailsPage extends Component {

    fetchCarBySlug = (slug) => {
        const cars = this.props.cars;
        return cars.filter((c) => c.slug === slug);
    }

    render = () => {

        const carSet = this.fetchCarBySlug(this.props.match.params.slug)
        return carSet.length > 0 ? 
        (
            <div>
                <div className="Main">
                    <CarDetails car={carSet[0]} />
                </div>
                <div>
                    <Link className="button" to="/"><Button className="button" variant="secondary">Back to Main Page</Button></Link>
                </div>
            </div>
            
        ) : (
            <div>
            <div>
                <h1>Car not found</h1>
            </div>
            <div>
                <Link className="button" to="/"><Button className="button" variant="secondary">Back to Main Page</Button></Link>
            </div>
            </div>
        );
    }
}

export default DetailsPage;