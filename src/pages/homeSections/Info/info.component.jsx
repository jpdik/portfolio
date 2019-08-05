import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'

import Section from '../../../components/section/section.component';

class Info extends Component {

    renderInfo() {
        let infoList = this.props.language.data.infoData || [];
        return Object.keys(infoList).map(key => {
            return (
                <Col key={key} className="infoCard" lg="6">
                    <strong>{key}:</strong>
                    <span>{infoList[key]}</span>
                </Col>
            )
        });
    }

    render() {
        let { infoTitle } = this.props.language.data;

        return (
            <Section title={infoTitle} {...this.props}>

                <Row className="about-content">

                    <Col lg="12 center">

                        <Row className="about-content justify-content-md-center">
                            {this.renderInfo()}
                        </Row>

                    </Col>

                </Row>
            </Section>
        )
    }
}

export default Info