import React, { Component } from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import eventlineStyles from './index.module.less'

class Eventline extends Component {
    render() {
        return (
            <div className={eventlineStyles.eventline}>
                <Timeline mode="alternate">
                    <Timeline.Item>设计并实现主要api接口 2021-10-10</Timeline.Item>
                    <Timeline.Item color="green">设计静态页面，实现主页、场景示范、功能展示等 2021-10-10</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        搭建flask服务器，进行动态页面渲染 2021-10-15
                    </Timeline.Item>
                    <Timeline.Item color="red">前后端交互，完善主要功能 2021-10-18</Timeline.Item>
                    <Timeline.Item>进行页面优化以及构建打包 2021-10-20</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                        总结汇报 20121-10-21
                    </Timeline.Item>
                </Timeline>
            </div>
        );
    }
}

export default connect()(withRouter(Eventline));