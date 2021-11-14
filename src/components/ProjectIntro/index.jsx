import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import projectStyles from './index.module.less'

class ProjectIntro extends Component {
    render() {
        return (
            <div className={projectStyles.project}>
                <h2 className={projectStyles.title}>1.项目名称: 隐身涂层损伤参数智能识别与隐身性能评估系统</h2>

                <h2 className={projectStyles.title}>2.技术内容</h2>
                <div className={projectStyles.content}>
                    研究基于损伤图像和信号的智能学习识别方法及局部损伤下整机隐身性能的仿真评估，县体内容包括:
                    ①对损伤缺陷数据的增强;②未知损伤缺陷的鉴别;③缺陷数据丕平衡或小样本条件下缺陷检测识别;
                    ④基王视觉注意力机制对损伤区域的显著感知;⑤缺陷边缘轮廓识别和面积计算能力;
                    ⑥局部缺陷下隐身性能评估模块;⑦软件交互操作界面;⑧支持脱落、崩边等多种损伤缺陷数据类型。
                </div>

                <h2 className={projectStyles.title}>3.主要研究指标</h2>
                <div className={projectStyles.content}>
                    (1)检测分类精度不低于85%; 
                    (2) 单幅图像检测时间不多王5s; 
                    (3)硬件系统GPU显存不低于16G,内存不低于16G; 
                    (4)智能学习平台为Pytorch或TensorFlow; 
                    (5) 隐身性能评估模块在低频段(1^ 4GHz)计算均方根误差不大于3dB，高频段(4~ 18Ghz)计算均方根误差不大于5dB (对比模型平板涂敷涂层); 
                    (6)隐身性能评估模块县备丛几何模型生成网格文件的能力;
                    (7)隐身性能评估模块县备演示数据库功能。
                </div>

                <h2 className={projectStyles.title}>4.研究成果</h2>
                <div className={projectStyles.content}>
                    (1)隐身涂层损伤参数智能识别与隐身性能评估系统一套(含用户使用手册);
                    (2)工作站(含鼠标键盘、不间断电源);
                    (3)测试报告一份，报告内容:隐身涂层损伤参数智能识别与隐身性能评估系统测试报告。
                </div>
            </div>
        );
    }
}

export default connect()(withRouter(ProjectIntro));