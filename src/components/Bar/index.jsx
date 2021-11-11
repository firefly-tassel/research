import React, { Component } from 'react';
import * as echarts from 'echarts/core';
import { TooltipComponent, GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import barStyles from './index.module.less'

echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

class Bar extends Component {

    componentDidMount() {
        var chartDom = document.getElementById('chart');
        var myChart = echarts.init(chartDom);
        myChart.setOption(this.props.option);
    }

    render() {
        return (
            <div className={barStyles.bar}>
                <div className={barStyles.chart} id="chart"></div>
            </div>
        );
    }
}

export default connect()(withRouter(Bar));