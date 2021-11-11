import React, { Component } from 'react'
import loadingStyles from './index.module.less'

export default class Loading extends Component {
    render() {
        return (
            <div>
                <div className={loadingStyles.loading}>
                    <span className={loadingStyles.loading_item}></span>
                    <span className={loadingStyles.loading_item}></span>
                    <span className={loadingStyles.loading_item}></span>
                    <span className={loadingStyles.loading_item}></span>
                </div>
            </div>
        )
    }
}
