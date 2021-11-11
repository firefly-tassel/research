import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import NewsCard from '../NewsCard';
import snow from '../../assets/images/white-snowflake.png'
import field1 from '../../assets/images/field1.png'
import field2 from '../../assets/images/field2.png'
import exampleStyles from './index.module.less';

class Example extends Component {
    state = {
        newsList: [{
            imgSrc: field1,
            title: '典型民机复合材料及损伤类型的确定',
            content: '先进复合材料首先在飞机一般结构上应用，随后在次承力结构、主承力结构上应用。20世纪80年代起，世界各国正在研制的性能先进的飞机机翼一级部件几乎全都采用先进复合材料，很多机身和机翼等主承力结构都使用了复合材料，且用量超过20%。而先进复合材料无损检测技术的发展水平和应用广度，对复合材料的研究深度和应用广度，有着至关重要的作用。随着复合材料在飞机上应用的不断扩大，复合材料的设计、制造、应用、损伤检测及修复也愈加规范。本文将从探究复合材料细观的损伤机理出发，分析典型材料的损伤机理。复合材料是经过选择含有一定数量比的两种或两种以上的组分（或组元），通过人工复合，组成多相、三维结合且各相之间有明显界限、具有特殊性能的材料。先进复合材料以其高的比强度、比刚度、良好的抗疲劳断裂性能。'
        }, {
            imgSrc: field2,
            title: '典型民机复合材料及损伤类型的确定',
            content: '先进复合材料首先在飞机一般结构上应用，随后在次承力结构、主承力结构上应用。20世纪80年代起，世界各国正在研制的性能先进的飞机机翼一级部件几乎全都采用先进复合材料，很多机身和机翼等主承力结构都使用了复合材料，且用量超过20%。而先进复合材料无损检测技术的发展水平和应用广度，对复合材料的研究深度和应用广度，有着至关重要的作用。随着复合材料在飞机上应用的不断扩大，复合材料的设计、制造、应用、损伤检测及修复也愈加规范。本文将从探究复合材料细观的损伤机理出发，分析典型材料的损伤机理。复合材料是经过选择含有一定数量比的两种或两种以上的组分（或组元），通过人工复合，组成多相、三维结合且各相之间有明显界限、具有特殊性能的材料。先进复合材料以其高的比强度、比刚度、良好的抗疲劳断裂性能。'
        }, {
            imgSrc: field1,
            title: '典型民机复合材料及损伤类型的确定',
            content: '先进复合材料首先在飞机一般结构上应用，随后在次承力结构、主承力结构上应用。20世纪80年代起，世界各国正在研制的性能先进的飞机机翼一级部件几乎全都采用先进复合材料，很多机身和机翼等主承力结构都使用了复合材料，且用量超过20%。而先进复合材料无损检测技术的发展水平和应用广度，对复合材料的研究深度和应用广度，有着至关重要的作用。随着复合材料在飞机上应用的不断扩大，复合材料的设计、制造、应用、损伤检测及修复也愈加规范。本文将从探究复合材料细观的损伤机理出发，分析典型材料的损伤机理。复合材料是经过选择含有一定数量比的两种或两种以上的组分（或组元），通过人工复合，组成多相、三维结合且各相之间有明显界限、具有特殊性能的材料。先进复合材料以其高的比强度、比刚度、良好的抗疲劳断裂性能。'
        }],
    }

    render() {
        const { newsList } = this.state;
        return (
            <div className={exampleStyles.example}>
                <div className={exampleStyles.news}>
                    <div className={exampleStyles.title}>模型案例<img className={exampleStyles.snow} src={snow} width="100%" height="100%" alt=""/></div>
                    <ul>
                        {
                            newsList.map(item => (
                                <li className={exampleStyles.newsItem}>
                                    <NewsCard imgSrc={item.imgSrc} title={item.title} content={item.content}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect()(withRouter(Example));