import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './css/iteminfo.css'

export default props => (
    <div className="service block-center text-white">

        <span className="icon">
            <FontAwesomeIcon size={props.iconSize || '4x'} icon={props.icon} />
        </span>

        <h3 className="itemInfo-title text-white">{props.title}</h3>

        <div className="service-content center">

            {props.children}

        </div>
    </div>
)