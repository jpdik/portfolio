import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'


import './css/about.css'
import avatar from '../../../img/avatar.jpg';
import Section from '../../../components/section/section.component';
import { Avatar } from '../../../components/avatar/avatar.styles';

class About extends Component {

	render() {
		let { aboutData, aboutTitle } = this.props.language.data;

		return (
			<Section title={aboutTitle} {...this.props} >
				<Row className="avatar-container">
					<Col lg="12">
						<Row className="justify-content-md-center">
							<Col className="center" lg="4">
								<Avatar src={avatar} alt="Avatar" />
							</Col>
							<Col lg="8">
								<p className="lead">{aboutData}</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</Section>
		)
	}
}

export default About