import React, { Component } from 'react'
import Navbar from '../sectionsComponents/Navbar/Navbar';
import Intro from '../sectionsComponents/Intro/Intro';
import About from '../sectionsComponents/About/About';
import { language } from '../data/info';
import Achievements from '../sectionsComponents/Achievements/Achievements';
import More from '../sectionsComponents/More/More';
import Contact from '../sectionsComponents/Contact/Contact';
import Footer from '../sectionsComponents/Footer/Footer';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = { language: { data: language.br, general: language.general } }
        this.languageDispatch = this.languageDispatch.bind(this);
    }

    languageDispatch(option){
        this.setState({ ...this.state, language: { data: language[option], general: language.general }})
    }

    render(){
        return (
            <>
            <Navbar language={this.state.language} actionLanguage={this.languageDispatch} />
            <Intro language={this.state.language} />
            <About language={this.state.language} />
            <Achievements language={this.state.language} />
            <More language={this.state.language} />
            <Contact language={this.state.language} />
            <Footer language={this.state.language} />
            </>
        )
    }
}

export default HomePage