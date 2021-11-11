import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import LeftNav from '../../components/LeftNav';
import showStyles from './index.module.less'

class Show extends Component {

    render() {
        return (
            <div className={showStyles.show}>
                <div className={showStyles.left}>
                    <LeftNav/>
                </div>
                <div className={showStyles.content}>
                    {this.props.children} 
                </div>
            </div>
        );
    }
}

export default connect()(withRouter(Show));