import React, { Component } from 'react';
import DisplayFeatures from './DisplayFeatures';


// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

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

  // updates aspects of 'selected' object in state.  this should get passed down as callback function from App.
  updateFeature = (feature, newValue) => {
    // creates a new object containing new value of selected feature.  assigns this 'new' object state (...with the same)
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  // Feature component starts here.  
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              // this function below needs to change state in App.
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    // all of this stuff will be the 'Cart' component.      
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    // this is calculated total.  
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

  // ohhh this might actually be how App begins.  Components can be placed in each section/div below.
    return (
      
      <div className="App">
        
        <header>
          <h1>ELF COMPUTERS | Laptops</h1>
        </header>
        <main>
          {/* DisplayFeatures begins with below HTML */}
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
            {/* Feature component runs here within DisplayFeatures. */}
          </form>
          {/* <DisplayFeatures ends here.  It will need FEATURES object, and will pass in updateFeature function.*/}

          <section className="main__summary">
          
          {/* Cart component starts here */}  
            <h2>Your cart</h2>
            {summary}
          {/* Cart component ends here */}

          {/* Total component starts */}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          {/* Total component ends here */}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
