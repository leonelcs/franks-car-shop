import React from 'react';
import './ShopHeader.css';
import { ReactComponent as Logo } from '../../images/FrankShopCar.svg';

function ShopHeader(props) {

    return (
        <div class="header">
            <Logo width="35%" height="35%"></Logo>
        </div>
    );
}

export default ShopHeader;