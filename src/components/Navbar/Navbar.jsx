import React, { Component } from 'react'
import { Navbar as Nav } from 'react-bootstrap'

import './css/navbar.css'
import logo from '../../img/logo.png'

import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navbar extends Component {

    render(){
        return(
            <Nav className="navbar justify-content-between">
            <a className="menu-toggle" href="#"><span>Menu</span></a>
					
			<img src={logo} id="logo" alt="Logo" />

            <a className="language-toggle" href="#"><span><FontAwesomeIcon size="lg" icon={faFlag} /></span></a>
            </Nav>
        )
    }
}

export default Navbar