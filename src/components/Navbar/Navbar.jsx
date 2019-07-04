import React, { Component } from 'react'
import { Navbar as Nav, NavDropdown } from 'react-bootstrap'

import './css/navbar.css'
import logo from '../../img/logo.png'

import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends Component {
    render() {
        let { aboutTitle, skillsTitle, qualificationsTitle, pExperienceTitle, awardsTitle, publicationsTitle, moreInfoTitle, contactTitle, portugueseText, englishText } = this.props.language.data;

        return (
            <Nav fixed="top" className="navbar justify-content-between">
                <NavDropdown className="menu-toggle" id="collasible-nav-dropdown">
                    <NavDropdown.Item href={'#'+aboutTitle}>{aboutTitle}</NavDropdown.Item>
                    <NavDropdown.Item href={'#'+skillsTitle}>{skillsTitle}</NavDropdown.Item>
                    <NavDropdown.Item href={'#'+qualificationsTitle}>{qualificationsTitle}</NavDropdown.Item>
                    <NavDropdown.Item href={'#'+pExperienceTitle}>{pExperienceTitle}</NavDropdown.Item>
                    <NavDropdown.Item href={'#'+awardsTitle}>{awardsTitle}</NavDropdown.Item>
                    <NavDropdown.Item href={'#'+publicationsTitle}>{publicationsTitle}</NavDropdown.Item>
                    <NavDropdown.Item href={'#'+moreInfoTitle}>{moreInfoTitle}</NavDropdown.Item>
                    <NavDropdown.Item href={'#'+contactTitle}>{contactTitle}</NavDropdown.Item>
                </NavDropdown>

                <a href="#intro">
                <img src={logo} id="logo" alt="Logo" />
                </a>

                <NavDropdown className="dropleft language-toggle" id="collasible-nav-dropdown" title={
                    <span><FontAwesomeIcon size="2x" icon={faFlag} /></span>
                }>
                    <NavDropdown.Item onClick={() => this.props.actionLanguage('br')}>{portugueseText}</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.props.actionLanguage('en')}>{englishText}</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }
}

export default Navbar