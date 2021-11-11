import React, { Component } from 'react';
import { Menu, Drawer, Button, Switch, Modal } from 'antd';
import { GithubOutlined, RobotOutlined, BulbOutlined, BulbFilled, TeamOutlined, ProjectOutlined, ApartmentOutlined } from '@ant-design/icons';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { changeCurrent } from '../../redux/actions/header';
import PlatformIntro from '../PlatformIntro';
import Eventline from '../Eventline';
import ProjectIntro from '../ProjectIntro';
import TeamIntro from '../TeamIntro';
import AllocationIntro from '../AllocationIntro';
import logo from '../../assets/images/logo.png';
import headerStyles from './index.module.less'

const { SubMenu } = Menu;
let styleLabel = document.createElement('style');

class Header extends Component {
    state = {
        visible: false,
        childrenDrawer: false,
        dark: false,
        isProjectVisible: false,
        isTeamVisible: false,
        isAllocationVisible: false,
    };

    //处理选中的导航栏选项
    handleClick = e => {
        console.log('click ', e);
        this.props.changeCurrent({ current: e.key });
    };

    //开启平台介绍显示
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    //关闭平台介绍显示
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    //夜光模式开关
    onChange = (checked) => {
        console.log(`switch to ${checked}`);
        this.setState({ dark: !this.state.dark })
        if (checked) {
            const style = 'html{filter: invert(100%) hue-rotate(180deg);}img,video {filter: invert(100%) hue-rotate(180deg);}';
            styleLabel.appendChild(document.createTextNode(style));
            document.head.appendChild(styleLabel);
        } else {
            document.head.removeChild(styleLabel);
        }
    }

    //开启创建时间线显示
    showChildrenDrawer = () => {
        this.setState({
            childrenDrawer: true,
        });
    };

    //关闭创建时间线显示
    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false,
        });
    };

    //开启 项目/团队/分工 介绍显示
    showModal = (name) => {
        if(name === 'project')
            this.setState({ isProjectVisible: true });
        else if(name === 'team')
            this.setState({ isTeamVisible: true });
        else
            this.setState({ isAllocationVisible: true });
    };

    // 项目/团队/分工 介绍确认
    handleOk = (name) => {
        if(name === 'project') {
            this.setState({ isProjectVisible: false });
        }
        else if(name === 'team')
            this.setState({ isTeamVisible: false }); 

        else
            this.setState({ isAllocationVisible: false });
        this.props.changeCurrent({ current: 'home' });
    };

    // 项目/团队/分工 介绍返回或关闭
    handleCancel = (name) => {
        if(name === 'project') 
            this.setState({ isProjectVisible: false });
        else if(name === 'team')
            this.setState({ isTeamVisible: false }); 

        else
            this.setState({ isAllocationVisible: false });
    };

    render() {
        const { dark, visible, childrenDrawer, isProjectVisible, isTeamVisible, isAllocationVisible } = this.state;
        const { current } = this.props;
        return (
            <div className={headerStyles.header}>
                <div className={headerStyles.header_left}>
                    <img className={headerStyles.logo} src={logo} style={{ marginLeft: "5rem", marginRight: "1rem" }} alt="" />
                    <div className={headerStyles.theme}>
                        隐身涂层损失参数智能识别与隐身性能评估系统
                        <RobotOutlined className={headerStyles.icon} style={{ fontSize: '1.8rem', marginLeft: '0.4rem' }} />
                    </div>
                </div>
                <Menu className={headerStyles.header_menu} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item key="home" style={{ marginLeft: "17vw" }}><NavLink to="/home">首页</NavLink></Menu.Item>
                    <Menu.Item key="show"><NavLink to="/show/functionIntro">场景示范</NavLink></Menu.Item>
                    <Menu.Item key="field"><NavLink to="/field">应用场景</NavLink></Menu.Item>
                    <SubMenu
                        title={<span>关于我们</span>}
                        key="about"
                    >
                        <Menu.Item key="project" icon={<ProjectOutlined />} onClick={() => this.showModal('project')}>项目介绍</Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="team" icon={<TeamOutlined />} onClick={() => this.showModal('team')}>团队介绍</Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key="allocation" icon={<ApartmentOutlined />} onClick={() => this.showModal('allocation')}>分工介绍</Menu.Item>
                    </SubMenu>
                </Menu>
                <div className={headerStyles.intro} onClick={this.showDrawer}>平台介绍</div>
                <div className={headerStyles.dark}>
                    {dark ?
                        <BulbFilled className={headerStyles.bulb} style={{ fontSize: '2rem', color: '#1E90FF' }} />
                        :
                        <BulbOutlined className={headerStyles.bulb} style={{ fontSize: '2rem' }} />
                    }
                    <div className={headerStyles.text} style={{ color: dark ? '#1E90FF' : '#000' }}>
                        夜光模式
                    </div>
                    <Switch size="default" onChange={this.onChange} />
                </div>
                <div className={headerStyles.header_github}>
                    <a href="https://gitee.com/firefly-tassel" target="view_window">
                        <GithubOutlined style={{ fontSize: '2.5rem', color: '#1E90FF' }} />
                    </a>
                </div>
                <Drawer
                    title="平台介绍"
                    width={520}
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                >
                    <PlatformIntro />
                    <Button type="primary" onClick={this.showChildrenDrawer}>
                        查看创建时间线
                    </Button>
                    <Drawer
                        title="创建时间线"
                        width={320}
                        closable={false}
                        onClose={this.onChildrenDrawerClose}
                        visible={childrenDrawer}
                    >
                        <Eventline />
                    </Drawer>
                </Drawer>
                <Modal
                    title="项目介绍"
                    visible={isProjectVisible}
                    onOk={() => this.handleOk('project')}
                    onCancel={() => this.handleCancel('project')}
                    width={670}
                    footer={[
                        <Button key="submit" type="primary" onClick={() => this.handleOk('project')}>
                            确认
                        </Button>,
                        <Button key="back" onClick={() => this.handleCancel('project')}>
                            返回
                        </Button>,
                    ]}
                >
                    <ProjectIntro />
                </Modal>
                <Modal
                    title="团队介绍"
                    visible={isTeamVisible}
                    onOk={() => this.handleOk('team')}
                    onCancel={() => this.handleCancel('team')}
                    width={750}
                    footer={[
                        <Button key="submit" type="primary" onClick={() => this.handleOk('team')}>
                            确认
                        </Button>,
                        <Button key="back" onClick={() => this.handleCancel('team')}>
                            返回
                        </Button>,
                    ]}
                >
                    <TeamIntro />
                </Modal>
                <Modal
                    title="分工介绍"
                    visible={isAllocationVisible}
                    onOk={() => this.handleOk('allocation')}
                    onCancel={() => this.handleCancel('allocation')}
                    width={700}
                    footer={[
                        <Button key="submit" type="primary" onClick={() => this.handleOk('allocation')}>
                            确认
                        </Button>,
                        <Button key="back" onClick={() => this.handleCancel('allocation')}>
                            返回
                        </Button>,
                    ]}
                >
                    <AllocationIntro />
                </Modal>
            </div>
        );
    }
}

export default connect(
    state => ({ current: state.header.current }),
    { changeCurrent }
)(withRouter(Header));