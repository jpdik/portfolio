import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import './css/about.css'
import Avatar from '../common/avatar/Avatar';
import avatar from '../../img/avatar.jpg'

class About extends Component {
	constructor(props) {
		super(props);
	}

	renderInfo() {
		let infoList = this.props.language.data.infoData || [];
		return Object.keys(infoList).map(key => {
			return (
				<Col className="infoCard" lg="6" key={key}>
					<strong>{key}:</strong>
					<span>{infoList[key]}</span>
				</Col>
			)
		});
	}

	renderBars() {
		let skillList = this.props.language.general.skillsData || [];
		return Object.keys(skillList).map(key => {
			return (
				<Col className="infoCard" lg="6" key={key}>
					<div class="progress">
						<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={skillList[key]} aria-valuemin="0" aria-valuemax="100" style={{ width: skillList[key] + '%' }}>{skillList[key]}%</div>
					</div>
					<strong>{key}</strong>
				</Col>
			)
		});
	}

	render() {
		let { aboutData, aboutTitle, infoTitle, skillsTitle } = this.props.language.data;

		return (
			<section className="start-section">
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
									<p class="lead">{aboutData}</p>
								</Col>
							</Row>
						</Col>
					</Row>

					<Row class="about-content">

						<Col lg="12 center">

							<h3 className="title-section">{infoTitle}</h3>

							<Row className="about-content justify-content-md-center">
								{this.renderInfo()}
							</Row>

						</Col>

					</Row>
					<Row className="row skill-content">

						<Col lg="12 center">

							<h3 className="title-section">{skillsTitle}</h3>

							<Row className="about-content justify-content-md-center">
								{this.renderBars()}
							</Row>

						</Col>

					</Row>

					<Row className="row button-section justify-content-md-center">
						<Col lg="4 center">
							<a href="#contact" title="Contato" className="button stroke smoothscroll">Contato</a>
						</Col>
						<Col lg="4 center">
							<a href="https://www.linkedin.com/in/jp-dev/" target="_blank" title="Meu cv" className="button button-primary">Meu cv</a>
						</Col>
					</Row>
				</Container>
			</section>
		)
	}
}

export default About