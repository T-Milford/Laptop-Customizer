import React, { Component } from 'react';
import Feature from './Feature';


class DisplayFeatures extends Component { 
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <Feature 
                    features = {this.props.features} 
                    updateFeatures = {this.props.updateFeatures} 
                    selected={this.props.selected}
                    featureHash={featureHash} 
                    feature = {feature}/>
            )
        
        });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default DisplayFeatures;