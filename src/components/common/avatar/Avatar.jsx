import React from 'react';

import './css/avatar.css'

export default props => (
    <img className={(props.className || '') +' img-rounded avatar'} src={props.src} alt="Avatar" />
)