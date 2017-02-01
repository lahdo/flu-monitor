import React, {Component} from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';
// import styles from './SearchForm.module.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Jumbotron className="flu-monitor">
                    <Grid>
                        <h1>Occurrences of the flu</h1>
                        <p>Select the country below to see where people have flu sympthons.</p>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}