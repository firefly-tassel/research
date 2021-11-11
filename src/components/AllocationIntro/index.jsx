import React, { Component } from 'react';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import allocationStyles from './index.module.less'
import * as echarts from 'echarts/core';

echarts.use([
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout
]);

class AllocationIntro extends Component {
    componentDidMount() {
        var chartDom = document.getElementById('pie');
        var myChart = echarts.init(chartDom);

        myChart.setOption({
            title: {
                text: '任务安排',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: '任务1' },
                        { value: 735, name: '任务2' },
                        { value: 580, name: '任务3' },
                        { value: 484, name: '任务4' },
                        { value: 300, name: '任务5' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 0,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }

    render() {
        return (
            <div className={allocationStyles.allocation}>
                <div id="pie" className={allocationStyles.pie}></div>
            </div>
        );
    }
}

export default connect()(withRouter(AllocationIntro));