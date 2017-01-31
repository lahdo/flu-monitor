import React, {Component} from 'react';
import './App.css';
import {Grid, Navbar, Jumbotron, Button, Row, Col, PageHeader, ListGroup, ListGroupItem} from 'react-bootstrap';
import FluMap from './components/FluMap.js';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar inverse fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Flu Monitor</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
                <Jumbotron className="flu-monitor">
                    <Grid>
                        <h1>Occurrences of the flu</h1>
                        <p>Select the country below to see where people have flu sympthons.</p>
                    </Grid>
                </Jumbotron>
                <Grid>
                    <Row>
                        <Col md={3}>
                            <ListGroup>
                                <ListGroupItem href="">Poland</ListGroupItem>
                                <ListGroupItem href="">USA</ListGroupItem>
                                <ListGroupItem href="">UK                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={9}>
                            <FluMap />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;

