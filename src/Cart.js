import react from 'react';

class Cart extends Component {
    render() {
            const summary = Object.keys(this.state.selected).map((feature, idx) => {
                const featureHash = feature + '-' + idx;
                const selectedOption = this.state.selected[feature];
                return (
                    <>
                        <h2>Your cart</h2>
                        <div className="summary__option" key={featureHash}>
                        <div className="summary__option__label">{feature} </div>
                        <div className="summary__option__value">{selectedOption.name}</div>
                        {/* Total should be run below */}
                        <div className="summary__option__cost">{USCurrencyFormat.format(selectedOption.cost)} </div>
                        </div>
                    </>
                );
            });
        
    }
  }

  export default Cart;