import React from 'react';

function Price(props) {
    const price = props.price;
    const formatedPrice = '€ ' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return (
        <span>{formatedPrice}</span>
    );
}

export default Price;