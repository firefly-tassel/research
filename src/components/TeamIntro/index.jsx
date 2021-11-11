import React, { Component } from 'react';
import { Collapse } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PersonInfo from '../PersonInfo'
import fzxAvatar from '../../assets/images/fzx.png'
import info from '../../assets/json/personInfo.json';
import teamStyles from './index.module.less'

const { Panel } = Collapse;

class TeamIntro extends Component {

    callback = (key) => {
        console.log(key);
    }

    render() {
        return (
            <div className={teamStyles.team}>
                <Collapse onChange={this.callback} defaultActiveKey={['1']}>
                    <Panel header="团队负责人" key="1">
                        <Collapse defaultActiveKey="1">
                            <Panel header="冯志玺" key="1">
                                <PersonInfo avatar={fzxAvatar} telephone={info[0].telephone} mail={info[0].mail} orientation={info[0].orientation} address={info[0].address} />
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header="团队指导老师" key="2">
                        <Collapse defaultActiveKey="2">
                            <Panel header="冯志玺" key="2">
                                <PersonInfo avatar={fzxAvatar} telephone={info[0].telephone} mail={info[0].mail} orientation={info[0].orientation} address={info[0].address} />
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header="团队核心成员" key="3">
                        <Collapse defaultActiveKey="3">
                            <Panel header="冯志玺" key="3">
                                <PersonInfo avatar={fzxAvatar} telephone={info[0].telephone} mail={info[0].mail} orientation={info[0].orientation} address={info[0].address} />
                            </Panel>
                        </Collapse>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export default connect()(withRouter(TeamIntro));