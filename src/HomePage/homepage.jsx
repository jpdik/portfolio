import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Intro from '../components/Intro/Intro';
import About from '../components/About/About';
import { language } from '../data/info';
import Achievements from '../components/achievements/Achievements';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = { language: { data: language.br, general: language.general } }
    }

    render(){
        return (
            <>
            <Navbar />
            <Intro language={this.state.language} />
            <About language={this.state.language} />
            <Achievements language={this.state.language} />
            </>
        )
    }
}

export default HomePage