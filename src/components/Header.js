import React, {Component} from 'react';
import {Grid, Jumbotron} from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="flu-monitor">
                    <Grid>
                        <h1>Tweets about the flue</h1>
                        <p>Select the country below to see where people are talking about the flu (~have flu symptoms)</p>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}