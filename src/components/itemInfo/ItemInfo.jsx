import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Service, ItemTitle, IconItem } from './ItemInfo.styles';

export default props => (
    <Service className="block-center text-white">

        <span className="icon">
            <FontAwesomeIcon size={props.iconSize || '4x'} icon={props.icon} />
        </span>

        <ItemTitle className="text-white">{props.title}</ItemTitle>

        <IconItem className="center">

            {props.children}

        </IconItem>
    </Service>
)