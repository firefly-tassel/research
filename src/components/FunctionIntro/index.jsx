import React, { Component } from 'react';
import { Card, BackTop } from 'antd';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { GlobeComponent } from 'echarts-gl/components';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import defect from '../../assets/images/defect-detecting.png'
// import star from '../../assets/images/star.jpg'
// import earth from '../../assets/images/earth.jpg'
import funcStyles from './index.module.less'

const { Meta } = Card;
echarts.use([GlobeComponent, CanvasRenderer]);
// var myChart;

class FunctionIntro extends Component {
    // componentDidMount() {
    //     var chartDom = document.getElementById('earth');
    //     myChart = echarts.init(chartDom);
    //     myChart.setOption({
    //         backgroundColor: '#000',
    //         globe: {
    //             baseTexture: earth,
    //             shading: 'lambert',
    //             environment: star,
    //             atmosphere: {
    //                 show: true
    //             },
    //             light: {
    //                 ambient: {
    //                     intensity: 0.1
    //                 },
    //                 main: {
    //                     intensity: 1.5
    //                 }
    //             }
    //         },
    //         series: [],
    //     });
    // }

    render() {
        return (
            <div className={funcStyles.function}>
                <BackTop />
                <div className={funcStyles.earth} id="earth"></div>
                <div className={funcStyles.allCard}>
                    <div className={funcStyles.function_card}>
                        <Card
                            className={funcStyles.card}
                            hoverable
                            cover={<img className={funcStyles.card_img} alt="example" src={defect} />}
                        >
                            <Meta title="数据增强" description="数据集增强主要是为了减少网络的过拟合现象，通过对训练图片进行变换可以得到泛化能力更强的网络，更好的适应应用场景。" />
                        </Card>
                        <Card
                            className={funcStyles.card}
                            hoverable
                            cover={<img className={funcStyles.card_img} alt="example" src={defect} />}
                        >
                            <Meta title="信号识别" description="信号识别，是指一种将被测辐射源信号与已知辐射源信号的特征参数相比较，以确定被测辐射源属性、类型和用途的过程。" />
                        </Card>
                    </div>
                    <div className={funcStyles.function_card}>
                        <Card
                            className={funcStyles.card}
                            hoverable
                            cover={<img className={funcStyles.card_img} alt="example" src={defect} />}
                        >
                            <Meta title="面积识别计算" description="数据集增强主要是为了减少网络的过拟合现象，通过对训练图片进行变换可以得到泛化能力更强的网络，更好的适应应用场景。" />
                        </Card>
                        <Card
                            className={funcStyles.card}
                            hoverable
                            cover={<img className={funcStyles.card_img} alt="example" src={defect} />}
                        >
                            <Meta title="损伤检测" description="包括显著感知、自动检测、鉴别、识别、缺陷检测识别等子功能" />
                        </Card>
                    </div>
                    <div className={funcStyles.function_card}>
                        <Card
                            className={funcStyles.card}
                            hoverable
                            cover={<img className={funcStyles.card_img} alt="example" src={defect} />}
                        >
                            <Meta title="面积识别计算" description="数据集增强主要是为了减少网络的过拟合现象，通过对训练图片进行变换可以得到泛化能力更强的网络，更好的适应应用场景。" />
                        </Card>
                        <Card
                            className={funcStyles.card}
                            hoverable
                            cover={<img className={funcStyles.card_img} alt="example" src={defect} />}
                        >
                            <Meta title="损伤检测" description="包括显著感知、自动检测、鉴别、识别、缺陷检测识别等子功能" />
                        </Card>
                    </div>
                    <div className={funcStyles.function_card}>
                        <Card
                            className={funcStyles.card}
                            hoverable
                            cover={<img className={funcStyles.card_img} alt="example" src={defect} />}
                        >
                            <Meta title="面积识别计算" description="数据集增强主要是为了减少网络的过拟合现象，通过对训练图片进行变换可以得到泛化能力更强的网络，更好的适应应用场景。" />
                        </Card>
                        <Card
                            className={funcStyles.card}
                            hoverable
                            cover={<img className={funcStyles.card_img} alt="example" src={defect} />}
                        >
                            <Meta title="损伤检测" description="包括显著感知、自动检测、鉴别、识别、缺陷检测识别等子功能" />
                        </Card>
                    </div>

                </div>
            </div>
        );
    }
}

export default connect()(withRouter(FunctionIntro));