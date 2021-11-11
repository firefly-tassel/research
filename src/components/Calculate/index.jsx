import React from 'react';
import { Steps, Button, message, Upload, Radio, Image, Tabs, Descriptions } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import axios from 'axios';
import Area from '../Area'
import Time from '../Time'
import defect from '../../assets/images/defect-detecting.png'
import calculateStyles from './index.module.less'

const { Dragger } = Upload;
const { Step } = Steps;
const { TabPane } = Tabs;

function Calculate() {

    //步骤条
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        if (current === 2) {
            setIsImg(false);
            setIsOperator(false);
            setOperator(0);
        }
        setCurrent(current - 1);
    };

    //1.选择文件
    //原图像
    const [originImg, setOriginImg] = React.useState('');
    //是否选择了图像
    const [isImg, setIsImg] = React.useState(false);
    //处理后的图像
    const [handleImg, setHandleImg] = React.useState('');
    //面积计算值
    const [area, setArea] = React.useState(0);


    const props = {
        name: 'file',
        multiple: false,
        accept: 'image/*',
        action: 'http://localhost:3000/api/upload',
        beforeUpload(file) {
            if (!isImg) {
                return true;
            }
            else {
                file.status = 'error';
                message.error('只支持上传一张图片', 1);
                return false;
            }
        },
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} 上传成功.`, 1);
                axios.get('http://localhost:3000/api/upload?type=image').then(
                    response => {
                        setOriginImg(response.data.originImg);
                        setIsImg(true);
                    },
                    error => {
                        console.log(error);
                    }
                )
            } else if (status === 'error') {
                message.error(`${info.file.name} 上传失败`, 1);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
        onRemove(file) {
            if (file.status === 'done') {
                setIsImg(false);
                setOriginImg('');
            }
        }
    };

    //2.选择数据增强方法
    //选择的数据增强方法
    const [operator, setOperator] = React.useState(0);
    //是否选择了数据增强方法
    const [isoperator, setIsOperator] = React.useState(false);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setOperator(e.target.value);
        setIsOperator(true);
    };

    const callback = (key) => {
        console.log(key);
    }

    const steps = [
        {
            title: '选择文件',
            content: <div className={calculateStyles.upLoadFile}>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">单击或拖动文件到此区域以上载</p>
                    <p className="ant-upload-hint">
                        支持单个或批量上传。严禁上传公司数据或其他带文件
                    </p>
                </Dragger>
            </div>,
        },
        {
            title: '选择算子',
            content: <div className={calculateStyles.operators}>
                <div className={calculateStyles.showImg}>
                    <img className={calculateStyles.img1} src={defect} alt="" />
                    <img className={calculateStyles.img2} src={defect} alt="" />
                    <img className={calculateStyles.img3} src={defect} alt="" />
                </div>
                <Radio.Group className={calculateStyles.radio} onChange={onChange} value={operator}>
                    <Radio value={1} className={calculateStyles.radio1}>Sobel</Radio>
                    <Radio value={2} className={calculateStyles.radio2}>Laplacian</Radio>
                    <Radio value={3} className={calculateStyles.radio3}>Canny</Radio>
                </Radio.Group>
            </div>,
        },
        {
            title: '执行结果',
            content: <div className={calculateStyles.result}>
                <Tabs onChange={callback} type="card" defaultActiveKey='1'>
                    <TabPane tab="识别检测结果" key="1">
                        <div className={calculateStyles.showImg}>
                            <div className={calculateStyles.originImg}>
                                <h2 className={calculateStyles.title}>原图像</h2>
                                <Image
                                    className={calculateStyles.resultImg}
                                    src={originImg}
                                    preview={{
                                        src: originImg,
                                    }}
                                />
                            </div>
                            <div className={calculateStyles.handleImg}>
                                <h2 className={calculateStyles.title}>二值化图像</h2>
                                <Image
                                    className={calculateStyles.resultImg}
                                    src={handleImg}
                                    preview={{
                                        src: handleImg,
                                    }}
                                />
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="面积计算值" key="2">
                        <div className={calculateStyles.area}>
                            <Descriptions bordered>
                                <Descriptions.Item label="面积">{area} cm^2</Descriptions.Item>
                            </Descriptions>
                        </div>
                    </TabPane>
                    <TabPane tab="统计结果" key="3">
                        <Area/>
                    </TabPane>
                </Tabs>

            </div>,
        },
    ];

    const calculate = () => {
        setCurrent(current + 1);
        axios.post('http://localhost:3000/api/calculate', { originImg, operator }).then(
            response => {
                if (response.status === 200 && response.data.code === 1) {
                    message.success(response.data.msg, 1);
                    setHandleImg(response.data.handleImg);
                    setArea(response.data.area);
                }
                else
                    message.success(response.data.msg, 1);
            },
            error => {
                message.error(error, 1);
            }
        )
    }

    return (
        <div className={calculateStyles.calculate}>
            <div className={calculateStyles.time}>
                <Time />
            </div>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className={calculateStyles.steps_content}>{steps[current].content}</div>
            <div className={calculateStyles.steps_action}>
                {current > 0 && (
                    <Button style={{ margin: '0 0.8rem' }} onClick={() => prev()}>
                        上一步
                    </Button>
                )}
                {current < steps.length - 2 && (
                    isImg ?
                        <Button type="primary" onClick={() => next()}>
                            下一步
                        </Button>
                        :
                        <Button type="primary" disabled>
                            下一步
                        </Button>
                )}
                {current === steps.length - 2 && (
                    isoperator ?
                        <Button type="primary" onClick={() => calculate()}>
                            完成
                        </Button>
                        :
                        <Button type="primary" disabled>
                            完成
                        </Button>
                )}
            </div>
        </div>
    );
}

export default connect()(withRouter(Calculate));