import React, {Component} from 'react';
import './App.css';
import {
    Grid, Navbar, Jumbotron, Button, Row, Col, Modal, ListGroup, ListGroupItem,
    Popover, Tooltip, OverlayTrigger
} from 'react-bootstrap';
import FluMap from './components/FluMap.js';

const App = React.createClass({
    getInitialState() {
        return {showModal: false};
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );

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
                                <ListGroupItem href="">UK </ListGroupItem>
                            </ListGroup>
                            <Button
                                onClick={this.open}
                                block={true}
                                bsStyle="info">
                                About
                            </Button>
                            <Modal show={this.state.showModal} onHide={this.close}>
                                <Modal.Header closeButton>
                                    <Modal.Title>About this project</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h4>How the data is retrieved</h4>
                                    <p>Data is retrieved from <a href="http://www.flutrack.org/">http://www.flutrack.org/</a>.
                                        Flutrack is getting this data thanks to mining Twitter.
                                    </p>

                                    <h4>Popover in a modal</h4>
                                    <p>there is a <OverlayTrigger overlay={popover}><a
                                        href="#">popover</a></OverlayTrigger> here</p>

                                    <h4>Tooltips in a modal</h4>
                                    <p>there is a <OverlayTrigger overlay={tooltip}><a
                                        href="#">tooltip</a></OverlayTrigger> here</p>

                                    <hr />

                                    <h4>Overflowing text to show scroll behavior</h4>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                        metus auctor fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                        metus auctor fringilla.</p>
                                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                        vestibulum at eros.</p>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                                        sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non
                                        metus auctor fringilla.</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.close}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                        <Col md={9}>
                            <FluMap />
                        </Col>
                    </Row>
                </Grid>
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
});

export default App;

