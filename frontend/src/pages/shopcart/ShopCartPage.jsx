import React, {Component} from 'react';
import Cart from '../../components/cart/Cart';
import { connect } from 'react-redux';

class ShopCartPage extends Component {
    render () {
        return (
            <div className="container">
                <Cart {...this.props} />
            </div>
        );
    }

}

const mapStateToProps = (state)=>{
    return {
        addedItems: state.addedItems
    }
  }

export default connect(mapStateToProps)(ShopCartPage);