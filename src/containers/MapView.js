import React, {Component} from 'react';
import {each} from 'lodash';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout.js';
import Footer from '../components/Footer.js';
import NavigationBar from '../components/NavigationBar.js';
import MapViewContent from '../components/MapViewContent.js';

const countries = [
    {
        name: 'USA',
        lat: 37.09024,
        lng: -97.712891,
        zoom: 4
    },
    {
        name: 'UK',
        lat: 53.509865,
        lng: -2.418092,
        zoom: 5
    },
    {
        name: 'Poland',
        lat: 51.919438,
        lng: 19.145136,
        zoom: 6
    },
    {
        name: 'Australia',
        lat: -25.7485093,
        lng: 135.8806607,
        zoom: 4
    },
    {
        name: 'Whole World',
        lat: 0,
        lng: 0,
        zoom: 2
    }
];

const apiBase = 'https://cors-anywhere.herokuapp.com/http://flutrack.org/results.json';

export default class MapView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            heatmapData: [],
            currentCountry: countries[0],
            countries: countries
        };

        this.selectCountry = this.selectCountry.bind(this);
    }

    componentDidMount() {
        this.retrieveFluData();
    }

    retrieveFluData() {
        fetch(
            `${apiBase}`, {
                timeout: 100000
            }
        ).then((response) => {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }

                return response.json()
            }
        ).then((response) => {
            const heatmapData = [];

            each(response, function (item) {
                heatmapData.push([item.latitude, item.longitude]);
            });

            this.setState({'heatmapData': heatmapData});
        });
    }

    selectCountry(country) {
        this.setState({'currentCountry': country});
    }

    render() {
        return (
            <Layout>
                <NavigationBar />
                <MapViewContent heatmapData={this.state.heatmapData}
                                countries={this.state.countries}
                                currentCountry={this.state.currentCountry}
                                selectCountry={this.selectCountry}/>
                <Footer />
            </Layout>
        );
    }
}