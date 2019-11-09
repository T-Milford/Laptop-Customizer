import React, { Component } from 'react';
import Feature from './Feature';


class DisplayFeatures extends Component { 
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Feature 
                    features = {this.props.features} 
                    updateFeatures = {this.props.updateFeatures} 
                    selected={this.props.selected} />
            </form>
        )
    }
}

export default DisplayFeatures;