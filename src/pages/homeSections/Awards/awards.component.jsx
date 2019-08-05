import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import HistogramList from '../../../components/histogram/HistogramList';
import HistogramItem from '../../../components/histogram/HistogramItem';

import { faStar } from '@fortawesome/free-solid-svg-icons'
import Section from '../../../components/section/section.component';

class Awards extends Component {

    renderAwards() {
        let awardsList = this.props.language.data.awardsData || [];
        return Object.keys(awardsList).map(key => {
            return (
                <HistogramItem key={key} title={awardsList[key].title} date={awardsList[key].date} iconSize='lg' icon={faStar} company={awardsList[key].company} iconStyle={awardsList[key].place}>
                    {awardsList[key].description}
                </HistogramItem>
            )
        });
    }

    render() {
        let { awardsTitle } = this.props.language.data;

        return (
                <Section title={awardsTitle} {...this.props}>
                    <Container>
                        <Row className="row">
                            <Col lg="12 center">
                                <HistogramList>
                                    {this.renderAwards()}
                                </HistogramList>

                            </Col>
                        </Row>
                    </Container>
                </Section>
        )
    }
}

export default Awards