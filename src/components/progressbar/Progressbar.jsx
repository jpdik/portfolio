import React from 'react';

import './css/progressbar.css'

export default props => (
    <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
        aria-valuenow={props.value} aria-valuemin="0" aria-valuemax="100" style={{ width: props.value + '%' }} />
        <div className="progress-value">{props.value}%</div>
    </div>
)