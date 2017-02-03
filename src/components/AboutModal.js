import React, {Component} from 'react';
import {Modal, OverlayTrigger, Tooltip, Popover, Button} from 'react-bootstrap';

export default class AboutModal extends Component {
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
                <Modal show={this.props.showModal}
                       onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>About this project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>How the data is retrieved</h4>
                        <p>Data is retrieved from <a href="http://www.flutrack.org/">http://www.flutrack.org/</a>.
                            Flutrack is getting this data by mining Twitter.
                        </p>
                        <p>
                            They gathers flu related tweets
                            from the entire world, with searching tag, words that are influenza synonyms and flu
                            symptoms.
                        </p>

                        <p>
                            This project aim is to visualize this data with heatmaps (rather then markers).
                        </p>

                        <h4>Autor</h4>
                        <p>Marcin Rapacz</p>

                        <h4>License</h4>
                        <p>MIT</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}