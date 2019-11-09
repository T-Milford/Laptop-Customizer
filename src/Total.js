

    // this is calculated total.  
    const total = Object.keys(this.state.selected).reduce(
        (acc, curr) => acc + this.state.selected[curr].cost,
        0
      );


// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  
  {/* Total component starts */}
  <div className="summary__total">
  <div className="summary__total__label">Total</div>
  <div className="summary__total__value">
    {USCurrencyFormat.format(total)}
  </div>
</div>
{/* Total component ends here */}