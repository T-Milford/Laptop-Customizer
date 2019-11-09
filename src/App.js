import React, { Component } from 'react';
import DisplayFeatures from './DisplayFeatures';


// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
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

  // updates aspects of 'selected' object in state.  this should get passed down as callback function from App.
  updateFeature = (feature, newValue) => {
    // creates a new object containing new value of selected feature.  assigns this 'new' object state (...with the same)
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  
  render() {
  // this is how App begins.  Components can be placed in each section/div below.
    return (
      <div className="App">
        <header>
          <h1>ELF COMPUTERS | Laptops</h1>
        </header>
        <main>
          

          <section className="main__summary">
          
          

          
          </section>
        </main>
      </div>
    );
  }
}

export default App;
