import React, { Component } from 'react';
import * as echarts from 'echarts/core';
import {
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent
} from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import areaStyles from './index.module.less'

echarts.use([
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    BarChart,
    LineChart,
    CanvasRenderer,
    UniversalTransition
]);

var option = {
    textStyle: {
        fontWeight: 'bold',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: { title: '数据视图', show: true, readOnly: false, lang: ['数据视图', '关闭', '刷新'] },
            magicType: { title: { line: '切换为折线图', bar: '切换为柱状图' }, show: true, type: ['line', 'bar'] },
            restore: { title: '还原', show: true },
            saveAsImage: { title: '保存为图片', show: true },
        },
        padding: [10, 21, 10, 0]
    },
    legend: {
        data: ['面积', '损失率', '精确度'],
        padding: [10, 0, 10, 0]
    },
    xAxis: [
        {
            type: 'category',
            data: ['第一次', '第二次', '第三次', '第四次', '第五次', '第六次', '第七次'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '损失率',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value} %'
            }
        },
        {
            type: 'value',
            name: '精确度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: '面积',
            type: 'bar',
            data: [
                2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 85.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ]
        },
        {
            name: '损失率',
            type: 'line',
            data: [
                75.6, 40.7, 28.7, 16.4, 9.0, 5.9, 2.6, 1.4, 48.7, 18.8, 6.0, 2.3
            ]
        },
        {
            name: '精确度',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};


class Area extends Component {

    componentDidMount() {
        var chartDom = document.getElementById('chart');
        var myChart = echarts.init(chartDom);
        myChart.setOption(option);
    }

    render() {
        return (
            <div className={areaStyles.area}>
                <div className={areaStyles.chart} id="chart"></div>
            </div>
        );
    }
}

export default connect()(withRouter(Area));