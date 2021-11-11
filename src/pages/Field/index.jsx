import React, { Component } from 'react';
import * as echarts from 'echarts/core';
import { LegendComponent } from 'echarts/components';
import { GraphChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import $ from "jquery";
import img1 from '../../assets/images/field1.png'
import img2 from '../../assets/images/field2.png'
// import field from '../../assets/json/field.json'
import fieldStyles from './index.module.less'

echarts.use([LegendComponent, GraphChart, CanvasRenderer]);

var ROOT_PATH =
    'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

class Field extends Component {

    componentDidMount() {
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;
        // myChart.showLoading();
        // myChart.showLoading();
        $.get(ROOT_PATH + '/data/asset/data/webkit-dep.json', function (webkitDep) {
            myChart.hideLoading();
            option = {
                textStyle: {
                    fontWeight: 700
                },
                legend: {
                    data: ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        type: 'graph',
                        layout: 'force',
                        animation: false,
                        label: {
                            position: 'right',
                            formatter: '{b}'
                        },
                        draggable: true,
                        data: webkitDep.nodes.map(function (node, idx) {
                            node.id = idx;
                            return node;
                        }),
                        categories: webkitDep.categories,
                        force: {
                            edgeLength: 5,
                            repulsion: 20,
                            gravity: 0.2
                        },
                        edges: webkitDep.links
                    }
                ]
            };
            myChart.setOption(option);
        });
        option && myChart.setOption(option);
    }

    render() {
        return (
            <div className={fieldStyles.field}>
                <img className={fieldStyles.img1} src={img1} alt=""/>
                <div className={fieldStyles.chart} id="main"></div>
                <img className={fieldStyles.img2} src={img2} alt=""/>
            </div>
        );
    }
}

export default connect()(withRouter(Field));