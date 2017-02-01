import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Flu Monitor</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
        );
    }
}