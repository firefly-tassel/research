import React, { Component } from 'react';
import { Menu } from 'antd';
import {
    FileTextOutlined,
    SecurityScanOutlined,
    DesktopOutlined,
    SearchOutlined,
    BookOutlined,
    AppstoreOutlined,
    RiseOutlined
} from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import leftNavStyles from './index.module.less'

const { SubMenu } = Menu;

class LeftNav extends Component {
    state = {
        collapsed: false,
        color: true
    };

    // toggleCollapsed = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //         color: !this.state.color
    //     });
    // };

    render() {
        return (
            <div style={{ background: '#000B18' }} className={leftNavStyles.leftNav}>
                {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 4 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button> */}
                <Menu
                    className={leftNavStyles.leftNav_menu}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1" icon={<AppstoreOutlined />} onClick={() => { this.props.history.push("/show/functionIntro") }}>
                        功能介绍
                    </Menu.Item>
                    <Menu.Item key="2" icon={<RiseOutlined />} onClick={() => { this.props.history.push("/show/dataEnhance") }}>
                        数据增强
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<SecurityScanOutlined />} title="损伤检测">
                        <Menu.Item key="3" onClick={() => { this.props.history.push("/show/perception") }}>显著感知</Menu.Item>
                        <Menu.Item key="4" onClick={() => { this.props.history.push("/show/autoDetect") }}>自动检测</Menu.Item>
                        <Menu.Item key="5" onClick={() => { this.props.history.push("/show/distinguish") }}>鉴别</Menu.Item>
                        <Menu.Item key="6" onClick={() => { this.props.history.push("/show/identify") }}>信号识别</Menu.Item>
                        <Menu.Item key="7" onClick={() => { this.props.history.push("/show/defectDete") }}>缺陷检测识别</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="8" icon={<SearchOutlined />} onClick={() => { this.props.history.push("/show/calculate") }}>
                        面积识别和计算
                    </Menu.Item>
                    <SubMenu key="sub2" icon={<FileTextOutlined />} title="文件">
                        <Menu.Item key="9">导出数据</Menu.Item>
                        <Menu.Item key="10">保存文件</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="11" icon={<BookOutlined />} onClick={() => { this.props.history.push("/show/learning") }}>
                        知识学习
                    </Menu.Item>
                    <Menu.Item key="12" icon={<DesktopOutlined />} onClick={() => { this.props.history.push("/show/modelExample") }}>
                        模型案例
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default connect()(withRouter(LeftNav));;