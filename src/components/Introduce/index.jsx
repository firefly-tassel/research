import React, { Component } from 'react';
import { Button, Modal, Form, Input, notification } from 'antd';
import { MailOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { changeCurrent } from '../../redux/actions/header';
import axios from 'axios';
import spinLogo from '../../assets/images/logo.svg'
import introStyles from './index.module.less'

const { TextArea } = Input;

class Introduce extends Component {

    state = {
        loading: false,
        visible: false,
        mail: "",
        suggestion: ""
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleMail = e => {
        console.log(e.target.value);
        this.setState({ mail: e.target.value });
    };

    handleSuggestion = e => {
        console.log(e.target.value);
        this.setState({ suggestion: e.target.value });
    };

    handleSubmit = values => {
        console.log(values);
        var mail = values['mail'].trim(), suggestion = values['suggestion'].trim();
        this.setState({ loading: true });
        setTimeout(() => { 
            axios.post('http://localhost:3000/api/feedback', { mail, suggestion}).then(
                response => {
                    if (response.status === 200 && response.data.code === 1) {
                        this.setState({suggestion: '', mail: '', loading: false, visible: false});
                        notification['success']({
                            duration: 3,
                            message: response.data.msg,
                            description:
                              '您的反馈意见已经成功发送至 1941816504@qq.com 邮箱',
                        });
                    }
                    else {
                        notification['error']({
                            duration: 3,
                            message: '发送失败',
                            description: `服务端代码出错：${response.data.msg}`,
                        });
                    }
                },
                error => {
                    notification['error']({
                        duration: 3,
                        message: '发送失败',
                        description: `客户端出错：${error}`,
                    });
                }
            )
        }, 3000);
    }

    render() {
        const { visible, loading, suggestion, mail } = this.state;
        return (
            <div className={introStyles.introduce}>
                <div className={introStyles.introduce_text}>
                    隐身涂层损失参数智能<br />
                    识别与隐身性能评估
                    <p className={introStyles.detail}>
                    随着人工智能的迅速发展，利用深度学习进行提高武器装备<br/>
                    外场维护技术研究也备受关注。在强散射部位采用具有涂装方便，<br/>
                    不改装备的气动外形等优点的雷达吸波材料已然成为隐身飞机、<br/>
                    导弹和战舰广泛采用的隐身技术。为解决隐身装备服日常训练<br/>
                    使用过程中因碰撞、划伤、自然老化、盐雾腐蚀等环境和人为因素<br/>
                    而导致雷达吸波材料出现局部结构损坏或性能退化，进而影响<br/>
                    整机隐身性能，降低装备的战场生存能力的问题，我们基于<br/>
                    tensorflow智能学习平台开展了雷达吸波材料服役损伤的<br/>
                    隐身参数检测技术研究。
                    </p>
                </div>
                <div className={introStyles.introduce_btn}>
                    <Button className={introStyles.btn1} onClick={() => { this.props.changeCurrent({current: 'show'});this.props.history.push("/show/functionIntro") }}>开始体验</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className={introStyles.btn2} onClick={this.showModal}>联系我们</Button>
                    <Modal
                        className={introStyles.modal}
                        visible={visible}
                        title="意见反馈"
                        onCancel={this.handleCancel}
                        footer={null}
                    >
                        <Form
                            name="feedback"
                            onFinish={this.handleSubmit}
                        >
                            <Form.Item
                                name="mail"
                                rules={[{ required: true, message: '请输入正确的邮箱', pattern: /^([a-zA-Z]|[0-9])(\w|)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/ }]}
                            >
                                <Input
                                    onChange={this.handleMail}
                                    value={mail}
                                    prefix={<MailOutlined />}
                                    placeholder="QQ邮箱"
                                />
                            </Form.Item>
                            <Form.Item
                                name="suggestion"
                                rules={[{ required: true, message: '请输入您的反馈意见' }]}
                            >
                                <TextArea
                                    onChange={this.handleSuggestion}
                                    placeholder="反馈意见"
                                    rows={10}
                                    value={suggestion}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" loading={loading}>
                                    提交
                                </Button>&nbsp;&nbsp;&nbsp;
                                <Button key="back" onClick={this.handleCancel}>
                                    返回
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
                <img className={introStyles.introduce_logo} src={spinLogo} width="15rem" height="15rem" alt="" />
            </div>
        );
    }
}

export default connect(
    state => ({ current: state.current }),
    { changeCurrent }
)(withRouter(Introduce));