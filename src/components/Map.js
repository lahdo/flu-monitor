import React, {Component} from 'react';
import GoogleMap from 'google-maps';

GoogleMap.KEY = 'AIzaSyBGBVkaUrkSN-MJ9hpPMqdgTeTpW9y9oUE';
GoogleMap.LIBRARIES = ['geometry', 'visualization'];

export default class Map extends Component {
    componentDidMount() {
        GoogleMap.load(function (google) {
            this.google = google;

            const heatmapData = [];

            this.pointArray = new google.maps.MVCArray(heatmapData);

            this.map = new google.maps.Map(this.refs.map, {
                center: {lat: this.props.currentCountry.lat, lng: this.props.currentCountry.lng},
                zoom: this.props.currentCountry.zoom
            });

            const heatmap = new google.maps.visualization.HeatmapLayer({
                data: this.pointArray,
                radius: 35
            });

            heatmap.setMap(this.map);
        }.bind(this));
    }

    componentDidUpdate() {
        this.props.heatmapData.forEach(item => {
            this.pointArray.push(new this.google.maps.LatLng(item[0], item[1]))
        });

        this.map.panTo(new this.google.maps.LatLng(this.props.currentCountry.lat, this.props.currentCountry.lng));
        this.map.setZoom(this.props.currentCountry.zoom);
    }

    render() {
        return (
            <div className="map"
                 ref="map">
            </div>
        );
    }
}