import React, { Component } from 'react';

class Total extends Component {

    
    
    render() {
        // this is calculated total.  
        let total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );
        console.log(this.total);
        return (       
            
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {this.props.currency.format(total)}
            </div>
            </div>
            
        )
    }
}

export default Total;