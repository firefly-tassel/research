import React, { Component } from 'react';
import { Carousel } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Introduce from '../../components/Introduce';
import Footer from '../../components/Footer';
import snow from '../../assets/images/white-snowflake.png'
import homeStyles from './index.module.less';

class Home extends Component {

    render() {
        return (
            <div className={homeStyles.home}>
                <img className={homeStyles.snow1} src={snow} width="100%" height="100%" alt="" />
                <img className={homeStyles.snow2} src={snow} width="100%" height="100%" alt="" />
                <img className={homeStyles.snow3} src={snow} width="100%" height="100%" alt="" />
                <Carousel effect="fade" autoplay>
                    <div className={homeStyles.home1}>
                        <Introduce />
                    </div>
                    <div className={homeStyles.home2}>
                        <Introduce />
                    </div>
                    <div className={homeStyles.home3}>
                        <Introduce />
                    </div>
                    <div className={homeStyles.home4}>
                        <Introduce />
                    </div>
                </Carousel>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default connect()(withRouter(Home));