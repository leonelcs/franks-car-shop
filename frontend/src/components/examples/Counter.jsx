import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';
import { Component } from 'react';

class Counter extends Component {

    //Define the initial state in a constructor
    constructor() {
        super();
        this.state = {
            counter: 0    
        }

    }

    render = () => {
        return (
            <div className="App">
              <CounterButton by={1} incrementMethod={this.increment}></CounterButton>
              <CounterButton by={5} incrementMethod={this.increment}></CounterButton>
              <CounterButton by={10} incrementMethod={this.increment}></CounterButton>
              <span className="count">{this.state.counter}</span>
              <div><button onClick={this.reset}className="reset">Reset</button></div>
            </div>
          );
    }

    reset = () => {
        this.setState(
            (prevState) => {
                return { counter: 0 }
            }
        )
    }

    //using arrow functions to avoid the need of binding
    increment = (by) => {
        console.log(`increment from child - ${by}`);
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        );
    }
}

class CounterButton extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0    
        }
    }

    render = () => {
        return (
            <div className="counterButton">
                <button onClick={this.increment} >+{this.props.by}</button>
                <button onClick={this.decrement} >-{this.props.by}</button>
            </div>
        );
    }

    increment = () => {
        this.setState(
            (prevState) => {
                return { counter: this.state.counter + this.props.by }
        });
        this.props.incrementMethod(this.props.by);
    }

    decrement = () => {
        this.setState(
            (prevState) => {
                return { counter: this.state.counter - this.props.by }
        });
        this.props.incrementMethod(-this.props.by);
    }
    
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter;