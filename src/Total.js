import React, { Component } from 'react';

class Total extends Component {

// from previous code: <div className="summary__option__cost">{USCurrencyFormat.format(selectedOption.cost)} </div>

    render() {
        // this is calculated total.  
        const total = Object.keys(this.state.selected).reduce(
            (acc, curr) => acc + this.state.selected[curr].cost,
            0
        );

        return (        
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {this.props.USCurrencyFormat.format(total)}
            </div>
            </div>
        )
    }
}

export default Total;