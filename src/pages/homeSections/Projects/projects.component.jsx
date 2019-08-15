import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Section from '../../../components/section/section.component';

import './projects.css';

const reqSvgs = require.context('../../../img/projects', true, /\.png$/)

const projectsList = reqSvgs.keys().reduce((images, path) => {
    images[path.substring(2)] = reqSvgs(path)
    return images
},
    {}
)

class Projects extends Component {
    renderProjects() {
        const projectsRefList = this.props.language.general.projectsReference || [];
        return projectsRefList.map((project, index) => (
            <Col className="project-item center" key={index} lg="4">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={projectsList[project.imageSource]} alt={project.name} />
                </a>
            </Col>
        ))
    }
    render() {
        let { projectsTitle } = this.props.language.data;

        return (
            <Section title={projectsTitle} {...this.props}>
                <Row className="row justify-content-md-center">
                    {this.renderProjects()}
                </Row>
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