import React from 'react';
import { Steps, Button, message, Upload, Radio, Image } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import axios from 'axios';
import Time from '../Time'
import defect from '../../assets/images/defect-detecting.png'
import dataEnhanceStyles from './index.module.less'

const { Dragger } = Upload;
const { Step } = Steps;

function DataEnhance() {

    //步骤条
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        if (current === 1) {
            setIsImg1(false);
            setIsImg2(false);
            setIsImg3(false);
            setIsImg4(false);
            setIsWay(false);
            setOriginImg1('');
            setOriginImg2('');
            setOriginImg3('');
            setOriginImg4('');
            setWay(0);
        }
        if (current === 2) {
            setIsImg1(false);
            setIsImg2(false);
            setIsImg3(false);
            setIsImg4(false);
            setIsWay(false);
            setOriginImg1('');
            setOriginImg2('');
            setOriginImg3('');
            setOriginImg4('');
        }
        setCurrent(current - 1);
    };

    //1.选择数据增强方法
    //选择的数据增强方法
    const [way, setWay] = React.useState(0);
    //是否选择了数据增强方法
    const [isWay, setIsWay] = React.useState(false);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setWay(e.target.value);
        setIsWay(true);
    };

    //2.选择文件
    //原图像
    const [originImg1, setOriginImg1] = React.useState('');
    const [originImg2, setOriginImg2] = React.useState('');
    const [originImg3, setOriginImg3] = React.useState('');
    const [originImg4, setOriginImg4] = React.useState('');
    //是否选择了图像
    const [isImg1, setIsImg1] = React.useState(false);
    const [isImg2, setIsImg2] = React.useState(false);
    const [isImg3, setIsImg3] = React.useState(false);
    const [isImg4, setIsImg4] = React.useState(false);
    //处理后的图像
    const [handleImg, setHandleImg] = React.useState('');


    const props1 = {
        name: 'file',
        multiple: true,
        accept: 'image/*',
        action: 'http://localhost:3000/api/upload',
        beforeUpload(file) {
            if (isImg1 && isImg2 && isImg3 && isImg4) {
                file.status = 'error';
                message.error('最多上传四张图片', 1);
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
                        if (!isImg1) {
                            setOriginImg1(response.data.originImg);
                            setIsImg1(true);
                        }
                        else if (!isImg2) {
                            setOriginImg2(response.data.originImg);
                            setIsImg2(true);
                        }
                        else if (!isImg3) {
                            setOriginImg3(response.data.originImg);
                            setIsImg3(true);
                        }
                        else {
                            setOriginImg4(response.data.originImg);
                            setIsImg4(true);
                        }

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
                if (originImg1.indexOf(file.name) !== -1) {
                    setIsImg1(false);
                    setOriginImg1('');
                }
                else if (originImg2.indexOf(file.name) !== -1) {
                    setIsImg2(false);
                    setOriginImg2('');
                }
                else if (originImg3.indexOf(file.name) !== -1) {
                    setIsImg3(false);
                    setOriginImg3('');
                }
                else {
                    setIsImg4(false);
                    setOriginImg4('');
                }
            }
        }
    };

    const props2 = {
        name: 'file',
        multiple: false,
        accept: 'image/*',
        action: 'http://localhost:3000/api/upload',
        beforeUpload(file) {
            if (!isImg1) {
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
                        setOriginImg1(response.data.originImg);
                        setIsImg1(true);
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
                setIsImg1(false);
                setOriginImg1('');
            }
        }
    };

    const steps = [
        {
            title: '选择数据增强方法',
            content: <div className={dataEnhanceStyles.ways}>
                <div className={dataEnhanceStyles.showImg}>
                    <img className={dataEnhanceStyles.img1} src={defect} alt="" />
                    <img className={dataEnhanceStyles.img2} src={defect} alt="" />
                    <img className={dataEnhanceStyles.img3} src={defect} alt="" />
                </div>
                <Radio.Group className={dataEnhanceStyles.radio} onChange={onChange} value={way}>
                    <Radio value={1} className={dataEnhanceStyles.radio1}>Mosaic数据增强</Radio>
                    <Radio value={2} className={dataEnhanceStyles.radio2}>色域变换</Radio>
                    <Radio value={3} className={dataEnhanceStyles.radio3}>添加噪声</Radio>
                </Radio.Group>
            </div>,
        },
        {
            title: '选择文件',
            content: <div className={dataEnhanceStyles.upLoadFile}>
                {way === 1 ? <Dragger {...props1}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">单击或拖动文件到此区域以上载</p>
                    <p className="ant-upload-hint">
                        支持单个或批量上传。严禁上传公司数据或其他文件
                    </p>
                </Dragger> :
                    <Dragger {...props2}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">单击或拖动文件到此区域以上载</p>
                        <p className="ant-upload-hint">
                            支持单个或批量上传。严禁上传公司数据或其他文件
                        </p>
                    </Dragger>
                }
            </div>,
        },
        {
            title: '执行结果',
            content: <div className={dataEnhanceStyles.result}>
                <div className={dataEnhanceStyles.showImg}>
                    <div className={dataEnhanceStyles.originImg}>
                        <h2 className={dataEnhanceStyles.title}>原图像</h2>
                        <Image
                            className={dataEnhanceStyles.resultImg}
                            src={originImg1}
                            preview={{
                                src: originImg1,
                            }}
                            fallback="data:image/png;base64,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"
                        />
                    </div>
                    <div className={dataEnhanceStyles.handleImg}>
                        <h2 className={dataEnhanceStyles.title}>{way === 1 ? 'Mosaic数据增强图像' : (way === 2 ? '色域变换图像' : '加噪图像')}</h2>
                        <Image
                            className={dataEnhanceStyles.resultImg}
                            src={handleImg}
                            preview={{
                                src: handleImg,
                            }}
                            fallback="data:image/png;base64,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"
                        />
                    </div>
                </div>
            </div>,
        },
    ];

    const dataEnhance = () => {
        setCurrent(current + 1);
        axios.post('http://localhost:3000/api/dataEnhance', { originImg1, originImg2, originImg3, originImg4, way }).then(
            response => {
                if (response.status === 200 && response.data.code === 1) {
                    message.success(response.data.msg, 1);
                    setHandleImg(response.data.handleImg);
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
        <div className={dataEnhanceStyles.dataEnhance}>
            <div className={dataEnhanceStyles.time}>
                <Time />
            </div>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className={dataEnhanceStyles.steps_content}>{steps[current].content}</div>
            <div className={dataEnhanceStyles.steps_action}>
                {current > 0 && (
                    <Button style={{ margin: '0 0.8rem' }} onClick={() => prev()}>
                        上一步
                    </Button>
                )}
                {current < steps.length - 2 && (
                    isWay ?
                        <Button type="primary" onClick={() => next()}>
                            下一步
                        </Button>
                        :
                        <Button type="primary" disabled>
                            下一步
                        </Button>
                )}
                {current === steps.length - 2 && (
                    way === 1 ?
                        isImg1 && isImg2 && isImg3 && isImg4 ?
                            <Button type="primary" onClick={() => dataEnhance()}>
                                完成
                            </Button>
                            :
                            <Button type="primary" disabled>
                                完成
                            </Button>
                        : isImg1 ?
                            <Button type="primary" onClick={() => dataEnhance()}>
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

export default connect()(withRouter(DataEnhance));