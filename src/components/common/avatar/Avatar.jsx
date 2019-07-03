import React from 'react';

import './css/avatar.css'

export default props => (
    <img className={props.className+' img-rounded'} src={props.src} alt="Avatar" />
)