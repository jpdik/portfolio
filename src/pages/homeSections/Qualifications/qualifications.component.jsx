import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import HistogramList from '../../../components/histogram/HistogramList';
import HistogramItem from '../../../components/histogram/HistogramItem';

import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Section from '../../../components/section/section.component';

class Qualifications extends Component {

    renderQualifications() {
        let qualificationsList = this.props.language.data.qualificationsData || [];
        return Object.keys(qualificationsList).map(key => {
            return (
                <HistogramItem key={key} classTitle="titleItem" title={qualificationsList[key].title} date={qualificationsList[key].date} icon={faGraduationCap}>
                    {qualificationsList[key].local}
                </HistogramItem>
            )
        });
    }
    render() {
        let { qualificationsTitle } = this.props.language.data;

        return (
                <Section title={qualificationsTitle} {...this.props.bgStyle}>
                    <Container>
                        <Row className="row">
                            <Col lg="12 center">
                                <HistogramList>
                                    {this.renderQualifications()}
                                </HistogramList>

                            </Col>
                        </Row>
                    </Container>
                </Section>
        )
    }
}

export default Qualifications