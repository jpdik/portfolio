import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import './css/achievements.css'
import HistogramList from '../common/histogram/HistogramList';
import HistogramItem from '../common/histogram/HistogramItem';

import { faGraduationCap, faStar, faBriefcase, faBook } from '@fortawesome/free-solid-svg-icons'

class Achievements extends Component {
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

    renderPublications(){
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
        let { pExperienceTitle, awardsTitle, qualificationsTitle, publicationsTitle } = this.props.language.data;

        return (
            <>
                <section id={qualificationsTitle} className="grey-section start-section">
                    <Container>
                        <Row className="row">

                            <Col lg="12 center">

                                <h2 className="title-section">{qualificationsTitle}</h2>
                            </Col>
                            <Col lg="12 center">
                                <HistogramList>
                                    {this.renderQualifications()}
                                </HistogramList>

                            </Col>

                        </Row>
                    </Container>
                </section>
                <section id={pExperienceTitle} className="start-section">
                    <Container>
                        <Row className="row">

                            <Col lg="12 center">

                                <h2 className="title-section">{pExperienceTitle}</h2>
                            </Col>
                            <Col lg="12 center">
                                <HistogramList>
                                    {this.renderExperience()}
                                </HistogramList>

                            </Col>

                        </Row>
                    </Container>
                </section>
                <section id={awardsTitle} className="grey-section start-section">
                    <Container>
                        <Row className="row">

                            <Col lg="12 center">

                                <h2 className="title-section">{awardsTitle}</h2>
                            </Col>
                            <Col lg="12 center">
                                <HistogramList>
                                    {this.renderAwards()}
                                </HistogramList>

                            </Col>

                        </Row>
                    </Container>
                </section>
                <section id={publicationsTitle} className="start-section">
                    <Container>
                        <Row className="row">

                            <Col lg="12 center">

                                <h2 className="title-section">{publicationsTitle}</h2>
                            </Col>
                            <Col lg="12 center">
                                <HistogramList>
                                    {this.renderPublications()}
                                </HistogramList>

                            </Col>

                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default Achievements