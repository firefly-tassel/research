import React, { Component } from 'react';
import { Avatar, Descriptions } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import personInfoStyles from './index.module.less'

class PersonInfo extends Component {
    render() {
        const { avatar, telephone, mail, orientation, address } = this.props;
        return (
            <div className={personInfoStyles.person}>
                <Descriptions column={2} bordered={true} size="middle">
                    <Descriptions.Item label="个人照片">
                        <Avatar src={avatar} shape="square" size={70} icon={<UserOutlined />} />
                    </Descriptions.Item>
                    <Descriptions.Item label="联系电话">{telephone}</Descriptions.Item>
                    <Descriptions.Item label="电子邮箱">{mail}</Descriptions.Item>
                    <Descriptions.Item label="研究方向">{orientation}</Descriptions.Item>
                    <Descriptions.Item label="通信地址">{address}</Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}

export default connect()(withRouter(PersonInfo));