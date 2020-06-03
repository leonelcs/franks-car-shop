import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Price from '../price/Price';
import './Cart.css';


class Cart extends Component{

    render(){
        console.log(this.props.addedItems);

        let addedItems = this.props.addedItems.length ?
            (  
                this.props.addedItems.map(car=>{
                    return(
                       
                        <li className="collection-item avatar" key={car.id}>
                                    <div className="item-img">
                                        <img src="images/default-pict.png" alt="images/default-pict.png" className="thumbnail"/>
                                    </div>
                                    <div className="item-desc">
                                        <span className="title">{car.make} - {car.model} - {car.yearModel}</span>
                                        <p><b>Price: <Price price={car.price} /></b></p> 
                                        <button className="waves-effect waves-light btn pink remove">Remove</button>
                                    </div>
                                    
                               </li>
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>  
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart)