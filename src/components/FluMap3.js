import React, {Component} from 'react';
import {render} from 'react-dom';
import Map from './Map';


export class FluMap3 extends Component {

    state = {
        mapHidden: false,
        layerHidden: false,
        addressPoints: []
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({addressPoints: this.props.results});
        }, 5000);
    }

    render() {
        const gradient = {
            '0.1': '#89BDE0',
            '0.2': '#96E3E6',
            '0.4': '#82CEB6',
            '0.6': '#FAF3A5',
            '0.8': '#F5D98B',
            '1.0': '#DE9A96'
        };

        // const position = [51.965, 19.808];
        // const key = 'AIzaSyBGBVkaUrkSN-MJ9hpPMqdgTeTpW9y9oUE';

        return (
            <div>
                <Map results={this.state.parsedResponse}>
                </Map>
            </div>
        );
    }
}

export default FluMap3;