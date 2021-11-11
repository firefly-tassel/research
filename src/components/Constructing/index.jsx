import React, { Component } from 'react';
import { Empty } from 'antd';
import constructingStyles from './index.module.less'

class Constructing extends Component {
    render() {
        return (
            <div className={constructingStyles.constructing}>
                <Empty description="正在建设中"/>
            </div>
        );
    }
}

export default Constructing;