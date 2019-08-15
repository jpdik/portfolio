import React, { Component } from 'react'
import logo from '../../img/logo.png'

import { faLanguage, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { HeaderNav, Logo, NavDropdownMenuToggle } from './header.styles';

import './header.css';
import NavLink from 'react-bootstrap/NavLink';

class Header extends Component {
    render() {
        let { aboutTitle, skillsTitle, projectsTitle, qualificationsTitle, pExperienceTitle, awardsTitle, publicationsTitle, moreInfoTitle, contactTitle, portugueseText, englishText } = this.props.language.data;

        let { actionLanguage } = this.props;

        return (
            <HeaderNav fixed="top" className="justify-content-between">
                <NavDropdownMenuToggle id="collasible-nav-dropdown" title={
                    <span><FontAwesomeIcon size="2x" icon={faBars} /></span>
                }>
                    <NavLink href={'#'+aboutTitle}>{aboutTitle}</NavLink>
                    <NavLink href={'#'+skillsTitle}>{skillsTitle}</NavLink>
                    <NavLink href={'#'+projectsTitle}>{projectsTitle}</NavLink>
                    <NavLink href={'#'+qualificationsTitle}>{qualificationsTitle}</NavLink>
                    <NavLink href={'#'+pExperienceTitle}>{pExperienceTitle}</NavLink>
                    <NavLink href={'#'+awardsTitle}>{awardsTitle}</NavLink>
                    <NavLink href={'#'+publicationsTitle}>{publicationsTitle}</NavLink>
                    <NavLink href={'#'+moreInfoTitle}>{moreInfoTitle}</NavLink>
                    <NavLink href={'#'+contactTitle}>{contactTitle}</NavLink>
                </NavDropdownMenuToggle>

                <a href="#intro">
                    <Logo src={logo} alt="Logo" />
                </a>

                <NavDropdownMenuToggle className="dropleft" id="collasible-nav-dropdown" title={
                    <span><FontAwesomeIcon size="2x" icon={faLanguage} /></span>
                } islanguage="true">
                    <NavLink onClick={() => actionLanguage('br')}>{portugueseText}</NavLink>
                    <NavLink onClick={() => actionLanguage('en')}>{englishText}</NavLink>
                </NavDropdownMenuToggle>
            </HeaderNav>
        )
    }
}

export default Header