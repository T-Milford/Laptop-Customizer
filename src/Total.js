import React, { Component } from 'react';

class Total extends Component {

// from previous code: <div className="summary__option__cost">{USCurrencyFormat.format(selectedOption.cost)} </div>
// this is calculated total.  
total = Object.keys(this.props.selected).reduce(
    (acc, curr) => acc + this.props.selected[curr].cost,
    0
);
    render() {
        return (       
            <div className="summary__option__cost">
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {this.props.currency.format(this.total)}
            </div>
            </div>
            </div> 
        )
    }
}

export default Total;