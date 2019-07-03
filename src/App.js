import React from 'react';
import './App.css';
import HomePage from './HomePage/homepage';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

import './common/imports'

library.add(faFlag)

function App() {
  return (
    <HomePage />
  );
}

export default App;
