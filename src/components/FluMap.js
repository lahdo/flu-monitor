import React, {PropTypes, Component} from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
    lat: 51.5258541,
    lng: -0.08040660000006028
};

const coords2 = {
    lat: 51.0058541,
    lng: -0.100040660000006028
};

const FluMap = React.createClass({

    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true
        });
    },

    onDragEnd(e) {
        console.log('onDragEnd', e);
    },

    onCloseClick() {
        console.log('onCloseClick');
    },

    onClick(e) {
        console.log('onClick', e);
    },

    render() {
        return (
            <Gmaps
                width={'800px'}
                height={'600px'}
                lat={coords.lat}
                lng={coords.lng}
                zoom={12}
                loadingMessage={'Be happy'}
                params={{v: '3.exp', key: 'AIzaSyBGBVkaUrkSN-MJ9hpPMqdgTeTpW9y9oUE'}}
                onMapCreated={this.onMapCreated}>
                <Marker
                    lat={coords.lat}
                    lng={coords.lng}
                    draggable={false}
                    onDragEnd={this.onDragEnd} />
                <Marker
                    lat={coords2.lat}
                    lng={coords2.lng}
                    draggable={false}
                    onDragEnd={this.onDragEnd} />
                <InfoWindow
                    lat={coords.lat}
                    lng={coords.lng}
                    content={'Hello, React'}
                    onCloseClick={this.onCloseClick} />
                <Circle
                    lat={coords.lat}
                    lng={coords.lng}
                    radius={500}
                    onClick={this.onClick} />
            </Gmaps>
        );
    }
});

export default FluMap;


// import shouldPureComponentUpdate from 'react-pure-render/function';
//
// import GoogleMap from 'google-map-react';
// import MyGreatPlace from './my_great_place.js';
//
// export default class FluMap extends Component {
//     static defaultProps = {
//         center: [59.938043, 30.337157],
//         zoom: 9,
//         greatPlaceCoords: {lat: 59.724465, lng: 30.080121},
//         apiKey: 'AIzaSyBGBVkaUrkSN-MJ9hpPMqdgTeTpW9y9oUE'
//     };
//
//     shouldComponentUpdate = shouldPureComponentUpdate;
//
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//         <div>
//         <h1>TESSSSST</h1>
//             <GoogleMap
//                 apiKey={this.props.apiKey}
//                 defaultCenter={this.props.center}
//                 defaultZoom={this.props.zoom}>
//             </GoogleMap>
//             </div>
//         );
//     }
// }