import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './pagesComponents/homepage';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './common/imports'

library.add(fab, faCheckSquare, faCoffee)

function App() {
    return ( <>
        <Route component={HomePage} />
    </>
    );
}

export default App;