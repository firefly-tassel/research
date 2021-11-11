import React, { Component } from 'react';
import { Popover } from 'antd';
import { PhoneOutlined, MailOutlined, MailFilled, QqOutlined, WechatOutlined, AimOutlined } from '@ant-design/icons'
import qqCode from '../../assets/images/qqCode.jpg';
import wechatCode from '../../assets/images/wechatCode.jpg';
import logo from '../../assets/images/xdu.png';
import footerStyles from './index.module.less';

const qqContent = (
    <div className={footerStyles.qqcode}>
        <img src={qqCode} width="100px" height="100px" alt=""/>
    </div>
);

const wechatContent = (
    <div className={footerStyles.wechatcode}> 
        <img src={wechatCode} width="100px" height="100px" alt=""/>
    </div>
);

class Footer extends Component {
    render() {
        return (
            <div className={footerStyles.foot}>
                <div className={footerStyles.contact}>
                    <div className={footerStyles.address1}>
                        <AimOutlined className={footerStyles.icon} />空工大地址：陕西省西安市灞桥区灞陵路1号<br/><br/>
                        <MailOutlined className={footerStyles.icon}/>邮编：710051
                    </div>
                    <div className={footerStyles.gap}></div>
                    <div className={footerStyles.address2}>
                        <AimOutlined className={footerStyles.icon} />西电地址：陕西省西安市雁塔区太白南路2号<br/><br/>
                        <MailOutlined className={footerStyles.icon}/>邮编：710071
                    </div>
                    <div className={footerStyles.gap}></div> 
                    <div className={footerStyles.phone}>
                        <PhoneOutlined className={footerStyles.icon}/>联系电话：18392950225<br/><br/>
                        <MailFilled className={footerStyles.icon}/>电子邮箱：zxfeng@xidian.edu.cn
                    </div>
                    <div className={footerStyles.gap}></div> 
                    <div className={footerStyles.code}>
                        <Popover content={qqContent}>
                            <div className={footerStyles.qq}>
                                <QqOutlined style={{fontSize: '2.8rem'}}/>
                            </div>
                        </Popover>
                        <Popover content={wechatContent}>
                            <div className={footerStyles.wechat}>
                                <WechatOutlined style={{fontSize: '2.8rem'}}/>
                            </div>
                        </Popover>
                    </div>
                    <div>
                        <img className={footerStyles.logo} src={logo} alt=""/>
                    </div>
                </div>
                <div className={footerStyles.tag}>版权所有：空军工程大学航空工程学院 x 西安电子科技大学&nbsp;&nbsp;&nbsp;&nbsp;MIT Licensed | Copyright © 2021</div>
            </div>
        );
    }
}

export default Footer;