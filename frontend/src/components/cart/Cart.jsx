import React, { Component } from 'react';
import { connect } from 'react-redux';
import Price from '../price/Price';
import {removeCarFromCart} from '../../redux/actions';
import './Cart.css';



class Cart extends Component{

    handleClick = (car) => {
        this.props.removeCarFromCart(car);
    }

    render(){
        let totalPrice = this.props.totalPrice;
        console.log(totalPrice);

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
                                        <button className="waves-effect waves-light btn pink remove" onClick={() => this.handleClick(car)} >Remove</button>
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
                        <li className="collection-item"><b>Total: <Price price={totalPrice} /></b></li>
                    </ul>
                </div>  
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeCarFromCart: (id)=>{dispatch(removeCarFromCart(id))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);