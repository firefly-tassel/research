import React, { Component } from 'react';
import { BackTop } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import platformStyles from './index.module.less'

class PlatfromIntro extends Component {
    render() {
        return (
            <div className={platformStyles.platfrom}>
                <h2 className={platformStyles.title}>1.首页</h2>
                <div className={platformStyles.content}>
                    首页展现了我们平台的基本介绍以及联系地址和方式，另外，可以通过QQ邮箱给我们提出宝贵的反馈意见。
                </div>
                <h2 className={platformStyles.title}>2.场景示范</h2>
                <div className={platformStyles.content}>
                    这一栏提供了功能介绍、数据增强、损伤检测（包括信号识别、缺陷检测识别等子功能）、知识学习
                    、模型案例等功能。
                </div>
                <h3 className={platformStyles.subTitle}>2.1 数据增强</h3>
                <div className={platformStyles.subContent}>
                   
                </div>
                <h3 className={platformStyles.subTitle}>2.2 信号检测</h3>
                <div className={platformStyles.subContent}>
                   
                </div>
                <h3 className={platformStyles.subTitle}>2.3 缺陷损伤检测</h3>
                <div className={platformStyles.subContent}>
                   
                </div>
                <h2 className={platformStyles.title}>3.其他功能</h2>
                <div className={platformStyles.content}>
                    关于其他功能（显著感知、自动检测、鉴别和文件保存导出等功能）还在努力建设中。
                </div>
                <h2 className={platformStyles.title}>4.GitHub</h2>
                <div className={platformStyles.content}>
                    平台设计源码请访问<GithubOutlined className={platformStyles.icon}/>GitHub： 
                    <a className={platformStyles.github} href="https://github.com/firefly-tassel" target="view_window">
                        https://github.com/firefly-tassel
                    </a> 。
                </div>
                <BackTop/>
            </div>
        );
    }
}

export default connect()(withRouter(PlatfromIntro));