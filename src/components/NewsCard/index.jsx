import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import newsStyles from './index.module.less'

class NewsCard extends Component {
    render() {
        const { imgSrc, title, content } = this.props;
        return (
            <div className={newsStyles.news}>
                <div className={newsStyles.detail}>
                    <img className={newsStyles.img} src={imgSrc} alt=""/>
                    <div className={newsStyles.text}>
                        <div className={newsStyles.title}>{title}</div>
                        <p className={newsStyles.content}>
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(withRouter(NewsCard));