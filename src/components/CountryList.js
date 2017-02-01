import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
// import styles from './SearchForm.module.css';

export default class CountryList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem href="">Poland</ListGroupItem>
                    <ListGroupItem href="">USA</ListGroupItem>
                    <ListGroupItem href="">UK </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}