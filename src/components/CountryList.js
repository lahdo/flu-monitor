import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export default class CountryList extends Component {
    isActive(country) {
        return country === this.props.currentCountry;
    }

    render() {
        return (
            <div>
                <ListGroup>
                    {
                        this.props.countries.map(function (country, i) {
                            return (
                                <ListGroupItem className="countries"
                                               onClick={() => this.props.selectCountry(country)}
                                               key={i}
                                               active={this.isActive(country)}>
                                    {country.name}
                                </ListGroupItem>
                            );
                        }, this)
                    }
                </ListGroup>
            </div>
        );
    }
}