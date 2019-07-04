import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './css/about.css'
import Avatar from '../common/avatar/Avatar';
import avatar from '../../img/avatar.jpg';

const reqSvgs = require.context('../../img/languages', true, /\.png$/)

const imageList = reqSvgs.keys().reduce((images, path) => {
	images[path.substring(2)] = reqSvgs(path)
	return images
},
	{}
)

class About extends Component {

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
					<div className="progress">
						<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100" style={{ width: skill.value + '%' }} />
						<div className="progress-value">{skill.value+"%"}</div>
					</div>
				</Col>
			)
		});
	}

	render() {
		let { aboutData, aboutTitle, infoTitle, skillsTitle, projectsTitle } = this.props.language.data;

		return (
			<>
				<section id={aboutTitle} className="start-section">
					<Container>
						<Row className="topic-container">
							<Col lg="12 center">
								<h5 className="title-section">{aboutTitle}</h5>
							</Col>

							<Col lg="12">
								<Row className="justify-content-md-center">
									<Col className="center" lg="4">
										<Avatar src={avatar} />
									</Col>
									<Col lg="8">
										<p className="lead">{aboutData}</p>
									</Col>
								</Row>
							</Col>
						</Row>

						<Row className="about-content">

							<Col lg="12 center">

								<h3 className="title-section">{infoTitle}</h3>

								<Row className="about-content justify-content-md-center">
									{this.renderInfo()}
								</Row>

							</Col>

						</Row>

					</Container>
				</section>
				<section id={skillsTitle} className="start-section">
					<Container>
						<Row className="row skill-content">

							<Col lg="12 center">

								<h3 className="title-section">{skillsTitle}</h3>

								<Row className="about-content justify-content-md-center">
									{this.renderBars()}
								</Row>

							</Col>

						</Row>
						<Row className="topic-container mt-5">
							<Col lg="12 center">
								<h5 className="title-section">{projectsTitle}</h5>
							</Col>
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
					</Container>
				</section>
			</>
		)
	}
}

export default About