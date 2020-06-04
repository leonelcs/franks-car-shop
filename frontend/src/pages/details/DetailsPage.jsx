import React, { Component } from 'react';
import CarDetails from '../../components/cardetails/CarDetails';
import { addCarToCart } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './DetailsPage.css';


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
                <div className="container">
                    <h3 className="center">{carSet[0].make} - {carSet[0].model} - {carSet[0].yearModel}</h3>
                        <div className="box">
                            <CarDetails car={carSet[0]} />
                        </div>
                </div>
                <div className="container valign-wrapper">
                    <div className="col" >
                    <span className="btn-floating halfway-fab waves-effect waves-light red left" onClick={this.handleClick} ><i className="material-icons" >add</i></span>
                    </div>
                    <div className="col">
                        <Link to="/"><span className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">arrow_back</i></span></Link>
                    </div>
                </div>
                {/* <div className="page-footer">
                    <div className="container" >
                        <div className="divider"></div>
                        <div className="row">
                            <span>Our cars has been tested and holds a valid APK</span>
                        </div>
                    </div>
                </div> */}
            </div>
            
        ) : (
            <div>
            <div>
                <h1>Car not found</h1>
            </div>
            <div>
                <div className="container valign-wrapper">
                    <div className="col" >
                        <Link to="/"><span className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">arrow_back</i></span></Link>
                    </div>
                </div>
                <div className="page-footer">
                    <div className="container" >
                        <div className="divider"></div>
                        <div className="row">
                            <span>Our cars has been tested and holds a valid APK</span>
                        </div>
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