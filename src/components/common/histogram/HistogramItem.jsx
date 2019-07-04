import React, { Component } from 'react';

import './css/histogram.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import If from '../If/If'
import { updateScript } from './js/script';

class HistogramItem extends Component {
    componentDidMount() {
        updateScript(this.refs.content);
    }

    render() {

        return (
            <div className="timeline-block">

                <div className="timeline-header">
                    <h3>{this.props.title}</h3>
                    <p>({this.props.date}{this.props.company ? ' - '+this.props.company : ''})</p>
                </div>

                <div className={'timeline-ico ' + (this.props.iconStyle || '')}>
                    <If test={this.props.icon}>
                        <FontAwesomeIcon size={this.props.iconSize || '2x'} icon={this.props.icon} />
                    </If>
                </div>

                <div ref="content" className={"timeline-content " + (this.props.minor === true ? 'content-minor' : '')}>
                    <p className={this.props.classTitle}>{this.props.children}</p>

                    <If test={this.props.reference}>
                        <p className="font-weight-bold">{this.props.reference}</p>
                    </If>
                </div>

            </div>
        )
    }
}

export default HistogramItem