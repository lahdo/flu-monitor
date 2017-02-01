import React, {Component} from 'react';
import {Grid, Button, Row, Col} from 'react-bootstrap';
import './MapViewContent.module.css';
import FluMap from './FluMap.js';
import Header from './Header.js';
import CountryList from './CountryList.js';
import AboutModal from './AboutModal.js';

export default class MapViewContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Grid>
                    <Row>
                        <Col md={3}>
                            <CountryList />
                            <Button
                                onClick={this.open}
                                block={true}
                                bsStyle="info">
                                About
                            </Button>
                            <AboutModal />
                        </Col>
                        <Col md={9}>
                            <p>{this.props.results.map((result, $index) => <b key={$index}>{ result.user_name }</b>)}</p>
                            <FluMap />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}