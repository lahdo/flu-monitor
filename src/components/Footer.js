import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Footer extends Component {
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