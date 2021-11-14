import React, { Component } from 'react';
import * as echarts from 'echarts/core';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { TreeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import img1 from '../../assets/images/field1.png'
import img2 from '../../assets/images/field2.png'
import { data, data2 } from '../../assets/js/data.js'
import fieldStyles from './index.module.less'

echarts.use([TooltipComponent, LegendComponent, TreeChart, CanvasRenderer]);

class Field extends Component {

    componentDidMount() {
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        myChart.showLoading();
        myChart.hideLoading();
        myChart.setOption(
            (option = {
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                legend: {
                    top: '2%',
                    left: '3%',
                    orient: 'vertical',
                    data: [
                        {
                            name: '应用场景1',
                            icon: 'rectangle'
                        },
                        {
                            name: '应用场景2',
                            icon: 'rectangle'
                        }
                    ],
                    // borderColor: '#c23531',
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        type: 'tree',
                        name: '应用场景1',
                        data: [data],
                        top: '5%',
                        left: '8%',
                        bottom: '2%',
                        right: '60%',
                        symbolSize: 7,
                        label: {
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right'
                        },
                        leaves: {
                            label: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        },
                        emphasis: {
                            focus: 'descendant'
                        },
                        expandAndCollapse: true,
                        animationDuration: 550,
                        animationDurationUpdate: 750
                    },
                    {
                        type: 'tree',
                        name: '应用场景2',
                        data: [data2],
                        top: '20%',
                        left: '65%',
                        bottom: '22%',
                        right: '18%',
                        symbolSize: 7,
                        label: {
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right'
                        },
                        leaves: {
                            label: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        },
                        expandAndCollapse: true,
                        emphasis: {
                            focus: 'descendant'
                        },
                        animationDuration: 550,
                        animationDurationUpdate: 750
                    }
                ]
            })
        );

        option && myChart.setOption(option);
    }

    render() {
        return (
            <div className={fieldStyles.field}>
                <img className={fieldStyles.img1} src={img1} alt="" />
                <div className={fieldStyles.chart} id="main"></div>
                <img className={fieldStyles.img2} src={img2} alt="" />
            </div>
        );
    }
}

export default connect()(withRouter(Field));