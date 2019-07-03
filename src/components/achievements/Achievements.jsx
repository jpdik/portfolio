import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import './css/achievements.css'
import HistogramList from '../common/histogram/HistogramList';
import HistogramItem from '../common/histogram/HistogramItem';

class Achievements extends Component {
    constructor(props) {
        super(props);
    }

    renderExperience(){
        let awardsList = this.props.language.data.pExperienceData || [];
		return Object.keys(awardsList).map(key => {
            return (
                <HistogramItem>
                    {awardsList[key].description}
                </HistogramItem>
            )
        });
    }

    render() {
        let { awardsTitle } = this.props.language.data;

        return (
            <section class="grey-section start-section">
                <Container>
                    <Row class="row">

                        <Col lg="12 center">

                            <h2>{awardsTitle}</h2>

                            <HistogramList>
                                {this.renderExperience()}
                            </HistogramList>

                        </Col>

                    </Row>
                </Container>
            </section>
        )
    }
}

export default Achievements