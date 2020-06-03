import React, { Component } from 'react';
import CarDetails from '../../components/cardetails/CarDetails';
import { addCarToCart } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './DetailsPage.css';
import { getCars } from '../../redux/carsReducer';


class DetailsPage extends Component {

    fetchCarBySlug = (slug) => {
        const cars = this.props.cars;
        return cars.filter((c) => c.slug === slug);
    }

    handleClick = () => {
        const car = this.fetchCarBySlug(this.props.match.params.slug)[0];
        this.props.addCarToCart(car); 
    }

    render = () => {

        const carSet = this.fetchCarBySlug(this.props.match.params.slug)
        return carSet.length > 0 ? 
        (
            <div>
                <div className="Main">
                    <CarDetails car={carSet[0]} />
                </div>
                <div className="container">
                    <div className="col" >
                    <span className="btn-floating halfway-fab waves-effect waves-light orange left" onClick={this.handleClick} ><i className="material-icons" >add</i></span>
                    </div>
                    <div className="col">
                        <Link to="/"><span className="btn-floating halfway-fab waves-effect waves-light orange"><i className="material-icons">arrow_back</i></span></Link>
                    </div>
                </div>
            </div>
            
        ) : (
            <div>
            <div>
                <h1>Car not found</h1>
            </div>
            <div>
                
                <div className="container">
                    <div className="col" >
                        <Link className="btn-floating pulse right" to="/"><span className="btn-floating halfway-fab waves-effect waves-light orange"><i className="material-icons">arrow_back</i></span></Link>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        addedItems: state.addedItems
    }
  }

const mapDispatchToProps= (dispatch)=>{
    return{
        addCarToCart: (car)=>{dispatch(addCarToCart(car))}
         }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);