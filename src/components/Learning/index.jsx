import React, { Component } from 'react';
import { Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import learningStyles from './index.module.less'

class Learning extends Component {
    state = { loading: true };

    UNSAFE_componentWillMount() {
        setTimeout(() => {
            this.setState({ loading: false });
        }, 500)
    }

    render() {
        return (
            <Spin spinning={this.state.loading} tip="加载中" size="large">
                <div className={learningStyles.learning}>
                    <div className={learningStyles.outCircle}>
                        <div className={learningStyles.inCircle}>
                        </div>
                    </div>
                    <iframe
                        className={learningStyles.course}
                        title="course"
                        // srcDoc={course}
                        src="http://localhost:3000/course/ml/2021-spring.html"
                        style={{ width: '99%', height: '95%' }}
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                        scrolling="auto"
                    />
                </div>
            </Spin>
        );
    }
}

export default connect()(withRouter(Learning));