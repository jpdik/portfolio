import React from 'react';
import './App.css';
import HomePage from './HomePage/homepage';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './common/imports'

library.add(fab, faCheckSquare, faCoffee)

function App() {
    return ( <
        HomePage / >
    );
}

export default App;