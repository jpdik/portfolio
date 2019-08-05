import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import HistogramList from '../../../components/histogram/HistogramList';
import HistogramItem from '../../../components/histogram/HistogramItem';

import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import Section from '../../../components/section/section.component';

class Experience extends Component {
    renderExperience() {
        let experiencieList = this.props.language.data.pExperienceData || [];
        return Object.keys(experiencieList).map(key => {
            return (
                <HistogramItem key={key} title={experiencieList[key].title} date={experiencieList[key].date} icon={faBriefcase}>
                    {experiencieList[key].description}
                </HistogramItem>
            )
        });
    }

    render() {
        let { pExperienceTitle } = this.props.language.data;

        return (
            <Section title={pExperienceTitle} {...this.props}>
                <Container>
                    <Row className="row">
                        <Col lg="12 center">
                            <HistogramList>
                                {this.renderExperience()}
                            </HistogramList>

                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }
}

export default Experience