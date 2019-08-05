import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import HistogramList from '../../../components/histogram/HistogramList';
import HistogramItem from '../../../components/histogram/HistogramItem';

import { faBook } from '@fortawesome/free-solid-svg-icons'
import Section from '../../../components/section/section.component';

class Publications extends Component {
    renderPublications() {
        let publicationsList = this.props.language.data.publicationsData || [];
        return Object.keys(publicationsList).map(key => {
            return (
                <HistogramItem key={key} title={publicationsList[key].title} date={publicationsList[key].date} icon={faBook}
                    company={publicationsList[key].company} reference={publicationsList[key].reference} minor={true} >
                    {publicationsList[key].description}
                </HistogramItem>
            )
        });
    }

    render() {
        let { publicationsTitle } = this.props.language.data;

        return (
            <Section title={publicationsTitle} {...this.props}>
                <Container>
                    <Row className="row">
                        <Col lg="12 center">
                            <HistogramList>
                                {this.renderPublications()}
                            </HistogramList>

                        </Col>

                    </Row>
                </Container>
            </Section>
        )
    }
}

export default Publications