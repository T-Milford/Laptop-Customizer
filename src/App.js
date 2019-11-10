import React, { Component } from 'react';
import DisplayFeatures from './DisplayFeatures';
import Cart from './Cart';
import Total from './Total'
import './App.css';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  // This object will allow us to
  // easily convert numbers into US dollar values
    USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF COMPUTERS | Laptops</h1>
        </header>
        <main>
          <DisplayFeatures 
            features = {this.props.FEATURES}
            updateFeature={this.updateFeature} 
            selected={this.state.selected}
            currency = {this.USCurrencyFormat}/>
          <section className="main__summary">
          <h2>Your cart</h2>  
            <Cart 
              selected={this.state.selected}
              currency={this.USCurrencyFormat}/>
            <Total 
              selected={this.state.selected}
              currency={this.USCurrencyFormat}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
