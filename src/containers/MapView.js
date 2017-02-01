import React, {Component} from 'react';
import {debounce, uniq, each} from 'lodash';
import fetch from 'isomorphic-fetch';
import axios from 'axios';

import Layout from '../components/Layout.js';
import Footer from '../components/Footer.js';
import NavigationBar from '../components/NavigationBar.js';
import MapViewContent from '../components/MapViewContent.js';

export default class MapView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: '7',
            response: {},
            parsedResponse: []
        };
    }

    componentDidMount() {
        this.retrieveFluData();
    }

    retrieveFluData() {
        // const key = 'AIzaSyCFxWDzf1o3au7ciaDxeeUn9zeJb5InpQ0';
        const time = this.state.time;
        const base = 'https://cors-anywhere.herokuapp.com/http://api.flutrack.org/';

        fetch(
            `${base}?time=${time}`, {
                timeout: 100000
            }
        ).then((response) => {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }

                return response.json()
            }
        ).then((response) => {
            const points = [];

            each(response, function(item) {
                points.push([item.latitude, item.longitude]);
            });

            this.setState({'parsedResponse': points});
            console.log('parsed json', points)
        });
    }

    render() {
        return (
            <Layout>
                <NavigationBar />
                <MapViewContent results={this.state.parsedResponse}/>
                <Footer />
            </Layout>
        );
    }
}