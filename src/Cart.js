import React, { Component } from 'react';
import Total from './Total';

class Cart extends Component {
    render() {
            Object.keys(this.state.selected).map((feature, idx) => {
                return (
                const featureHash = feature + '-' + idx;
                const selectedOption = this.state.selected[feature];
                    return (
                        <>
                            <div className="summary__option" key={featureHash}>
                                <div className="summary__option__label">{feature} </div>
                                <div className="summary__option__value">{selectedOption.name}</div>
                                {/* <div className="summary__option__cost">{USCurrencyFormat.format(selectedOption.cost)} </div> */}
                                <div className="summary__option__cost"><Total /></div>
                            </div>
                        </>
                    );
                )
            })
        
    }
  }

  export default Cart;