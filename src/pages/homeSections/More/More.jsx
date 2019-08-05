import React, { Component } from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'
import ItemInfo from '../../../components/itemInfo/ItemInfo';

import { faServer, faGlobeAmericas, faComments, faNewspaper } from '@fortawesome/free-solid-svg-icons'

import './css/more.css'
import Progressbar from '../../../components/progressbar/Progressbar';
import Section from '../../../components/section/section.component';

class More extends Component {

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

    renderBars(barList) {
        let itemList = barList || [];
        return Object.keys(itemList).map(key => {
            return (
                <Col key={key} className="infoCard" lg="12">
                    <Progressbar value={itemList[key]} />
                    <strong>{key}</strong>
                </Col>
            )
        });
    }



    render() {
        const { moreInfoTitle, systemsTitle, languagesTitle, personalityTitle, interestsTitle } = this.props.language.data;

        return (
            <Section title={moreInfoTitle} {...this.props}>
                <Row className="services-content justify-content-md-center">
                    <Col lg="6">
                        <Carousel className="center">
                            <Carousel.Item>
                                <ItemInfo icon={faServer} title={systemsTitle}>
                                    <ul>
                                        {this.renderLists(this.props.language.general.systemsData)}
                                    </ul>
                                </ItemInfo>
                            </Carousel.Item>
                            <Carousel.Item>
                                <ItemInfo icon={faGlobeAmericas} title={languagesTitle}>
                                    <ul>
                                        {this.renderBars(this.props.language.data.languagesData)}
                                    </ul>
                                </ItemInfo>
                            </Carousel.Item>
                            <Carousel.Item>
                                <ItemInfo icon={faComments} title={personalityTitle}>
                                    <ul>
                                        {this.renderLists(this.props.language.data.personalityData)}
                                    </ul>
                                </ItemInfo>
                            </Carousel.Item>
                            <Carousel.Item>
                                <ItemInfo icon={faNewspaper} title={interestsTitle}>
                                    <ul>
                                        {this.renderLists(this.props.language.data.interestsData)}
                                    </ul>
                                </ItemInfo>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Section>
        )
    }
}

export default More