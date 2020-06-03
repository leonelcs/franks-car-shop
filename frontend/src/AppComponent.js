import React, { Component } from 'react';
import './App.css';
import Main from './pages/main/Main';
import {Switch, Route} from 'react-router-dom';
import DetailsPage from './pages/details/DetailsPage';
import Spinner from 'react-bootstrap/Spinner';
import ShopHeader from './components/header/ShopHeader';
import NavBar from './components/navbar/NavBar';
import ShopCartPage from './pages/shopcart/ShopCartPage';


class AppComponent extends Component {

  componentDidMount() {
    console.log(this.props);
    const {fetchCars} = this.props;
    fetchCars();
  }

  shouldComponentRender() {
    const {pending} = this.props;
    if(pending === false) return false;
    return true;
  }

  render() {
    const {cars} = this.props;

    if(!this.shouldComponentRender()) return (<Spinner />);
   
    return (
      <div>
        <NavBar></NavBar>
        <ShopHeader/>
        <Switch>
          <Route exact path="/" render={() => <Main cars={cars} />} />
          <Route exact path="/car/:slug" render={(params) => (<DetailsPage {...params} {...this.props} />)} />
          <Route exact path="/shopcart" render={(params) => (<ShopCartPage {...params} {...this.props} />)} />
        </Switch>
      </div>
    );
  }
}

export default AppComponent;
