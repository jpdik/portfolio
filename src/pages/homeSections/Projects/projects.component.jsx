import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Section from '../../../components/section/section.component';

class Projects extends Component {

    render() {
        let { projectsTitle } = this.props.language.data;

        return (
            <Section title={projectsTitle} {...this.props}>
                <Row className="row button-section justify-content-md-center">
                    <Col lg="12 center">
                        <a href="https://github.com/jpdik" target="_blank" rel="noopener noreferrer" className="button text-dark">
                            <FontAwesomeIcon size="4x" icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/jp-dev/" target="_blank" rel="noopener noreferrer" className="button text-dark">
                            <FontAwesomeIcon size="4x" icon={faLinkedin} />
                        </a>
                    </Col>
                </Row>
            </Section>
        )
    }
}

export default Projects