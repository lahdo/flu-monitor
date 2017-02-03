import React, {Component} from 'react';
import {Grid, Button, Row, Col} from 'react-bootstrap';
import Header from './Header.js';
import CountryList from './CountryList.js';
import AboutModal from './AboutModal.js';
import Map from './Map';
import './MapViewContent.module.css';

export default class MapViewContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <div>
                <Header />
                <Grid>
                    <Row>
                        <Col md={3}>
                            <CountryList countries={this.props.countries}
                                         currentCountry={this.props.currentCountry}
                                         selectCountry={this.props.selectCountry}/>
                            <Button
                                className="about"
                                onClick={this.open}
                                block={true}
                                bsStyle="info">
                                About
                            </Button>
                            <AboutModal showModal={this.state.showModal}
                                        close={this.close}
                                        />
                        </Col>
                        <Col md={9}>
                            <h1 className="countryName">{this.props.currentCountry.name}</h1>
                            <Map heatmapData={this.props.heatmapData}
                                 currentCountry={this.props.currentCountry}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}