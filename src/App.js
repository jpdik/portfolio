import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './common/imports'
import HomePage from './pages/home.component';
import Header from './components/header/header.component';

import languageData from './data/info';

library.add(fab, faCheckSquare, faCoffee)

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { language: { data: languageData.br, general: languageData.general } }
        this.languageDispatch = this.languageDispatch.bind(this);
    }

    languageDispatch(option) {
        this.setState({ ...this.state, language: { data: languageData[option], general: languageData.general } })
    }

    render() {

        return (
            <>
                <Header language={this.state.language} actionLanguage={this.languageDispatch} />
                <Switch>
                    <Route render={() => <HomePage language={this.state.language} />} />
                </Switch>
            </>
        );
    }
}

export default App;