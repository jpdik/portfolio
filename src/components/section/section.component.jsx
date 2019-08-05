import React from 'react';
import { Container, Col } from 'react-bootstrap'

import { SectionBackGround, RowMargin, Title, Description } from './section.styles';

const Section = ({ title, description, children, ...otherProps }) => (
    <SectionBackGround id={title} {...otherProps} className="section-box">
        <Container>
            <RowMargin>
                <Col lg="12 center">
                    <Title {...otherProps}>{title}</Title>
                    {description ? (<Description {...otherProps}>{description}</Description>) : null}
                </Col>
            </RowMargin>

            {children}
        </Container>
    </SectionBackGround>
);

export default Section