import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'

import Progressbar from '../../../components/progressbar/Progressbar';
import Section from '../../../components/section/section.component';

const reqSvgs = require.context('../../../img/languages', true, /\.png$/)

const imageList = reqSvgs.keys().reduce((images, path) => {
    images[path.substring(2)] = reqSvgs(path)
    return images
},
    {}
)

class Skills extends Component {

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

    renderBars() {
        let skillList = this.props.language.general.skillsData || [];
        return skillList.map((skill, index) => {
            return (
                <Col key={index} className="infoCard" lg="6">

                    <img className="language-logo" src={imageList[skill.imageSource]} alt="logo" />
                    <strong>{skill.name}</strong>
                    <Progressbar value={skill.value} />
                </Col>
            )
        });
    }

    render() {
        let { skillsTitle } = this.props.language.data;

        return (
            <Section title={skillsTitle}>
                <Row className="row skill-content">

                    <Col lg="12 center">
                        <Row className="about-content justify-content-md-center">
                            {this.renderBars()}
                        </Row>

                    </Col>

                </Row>
            </Section>
        )
    }
}

export default Skills