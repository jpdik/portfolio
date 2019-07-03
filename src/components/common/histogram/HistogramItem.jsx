import React from 'react';

import './css/award.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => (
    <div class="timeline-block">

        <div class="timeline-ico">
            <FontAwesomeIcon size={props.iconSize} icon={props.icon} />  
        </div>

        <div class="timeline-header">
            <h3>{props.title}</h3>
            <p>{props.date}</p>
        </div>

        <div class="timeline-content">
            <p>{props.children}</p>
        </div>

    </div>
)