import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
// import styles from './SearchForm.module.css';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <hr/>
                            <p>MIT Licensed | Marcin Rapacz, January 2017</p>
                            <hr/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}