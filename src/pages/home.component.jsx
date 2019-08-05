import React, { Component } from 'react'
import Intro from './homeSections/Intro/Intro';
import About from './homeSections/About/About';
import More from './homeSections/More/More';
import Contact from './homeSections/Contact/Contact';
import Footer from './homeSections/Footer/Footer';
import Info from './homeSections/Info/info.component';
import Skills from './homeSections/Skills/skills.component';
import Projects from './homeSections/Projects/projects.component';
import LanguageContext from '../components/language/language';
import Qualifications from './homeSections/Qualifications/qualifications.component';
import Experience from './homeSections/Experience/experience.component';
import Awards from './homeSections/Awards/awards.component';
import Publications from './homeSections/publications/publications.component';

class HomePage extends Component {

    renderSections(){
        const sections = [ About, Info, Skills, Projects, Qualifications, Experience, Awards, Publications ];
        return sections.map((Section, idx) => <Section key={idx} bgStyle={idx % 2 === 0 ? 'white' : 'grey'}/>);
    }

    render() {
        const { language } = this.props;

        return (
            <LanguageContext language={language}>
                <Intro />
                {this.renderSections()}
                <More bgStyle='dark'/>
                <Contact />
                <Footer />
            </LanguageContext>
        )
    }
}

export default HomePage