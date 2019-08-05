import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'

import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './intro.css'

import { updateCanvas } from './draw'

class Intro extends Component {
    componentDidMount() {
        updateCanvas(this.refs.canvas);
    }

    render() {
        let { hi, iam, myname, principalFunctions, aboutTitle } = this.props.language.data;

        return (
            <section id="intro">
                <canvas ref="canvas" className="intro-overlay"></canvas>

                <div className="intro-content">
                    <Row className="justify-content-md-center">

                        <Col lg="8">
                            <h5>{hi}</h5>
                            <h1 className="title">{iam} {myname}</h1>

                            <p className="intro-position">
                                <span>| {principalFunctions.join(', ')} |</span>
                            </p>

                            <a className="button stroke smoothscroll" href={'#'+aboutTitle} title="">{aboutTitle}<FontAwesomeIcon className="icon-about" size="lg" icon={faSortDown}/></a>

                        </Col>

                    </Row>
                </div>
            </section>
        )
    }
}

export default Intro