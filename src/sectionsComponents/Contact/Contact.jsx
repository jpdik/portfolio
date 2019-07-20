import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import './css/contact.css'

class Contact extends Component {

    renderLists(list) {
        let itemList = list || [];
        return itemList.map(item => {
            return (
                <li key={item}>
                    {item}
                </li>
            )
        });
    }


    render() {
        const { contactTitle, contactDescription, yourNameText, yourEmailText, yourmessageText, sendText } = this.props.language.data;

        return (
            <section id={contactTitle} className="start-section grey-section">

                <Container>
                    <Row>
                        <Col lg="12 center">
                            <h5 className="title-section text-blue">{contactTitle}</h5>
                            <h1 className="description-section">{contactDescription}</h1>
                        </Col>

                    </Row>

                    <Row>

                        <Col lg="12 center">

                            <Form id="contactform" action="//formspree.io/jpmdik@gmail.com" method="POST">

                                <Form.Row className="justify-content-md-center mt-3">
                                    <Col lg="6">
                                        <Form.Control type="text" name="name" placeholder={yourNameText} />
                                    </Col>
                                </Form.Row>
                                <Form.Row className="justify-content-md-center mt-3">
                                    <Col lg="6">
                                        <Form.Control type="email" name="_replyto" placeholder={yourEmailText} />
                                    </Col>
                                </Form.Row>
                                <Form.Row className="justify-content-md-center  mt-3">
                                    <Col lg="6">
                                        <Form.Control as="textarea" name="message" placeholder={yourmessageText} />
                                    </Col>
                                </Form.Row>

                                <Form.Row className="justify-content-md-center mt-3 mb-5">
                                    <Col lg="6">
                                        <Button variant="primary" type="submit">
                                            {sendText}
                                        </Button>
                                    </Col>
                                </Form.Row>

                            </Form>


                        </Col>

                    </Row>
                </Container >
            </section >
        )
    }
}

export default Contact