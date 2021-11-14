const data = {
    name: '应用场景1',
    children: [
        {
            name: '军事领域',
            children: [
                {
                    name: '保密通信',
                    children: [
                        { name: '雷达通信', value: 721 },
                        { name: '军事保密', value: 4294 }
                    ]
                },
                {
                    name: '雷达处理',
                    value: 3322
                }
            ]
        },
        {
            name: '材料领域',
            children: [
                { name: '半导体材料', value: 8833 },
                { name: '金属材料', value: 1732 },
                { name: '雷达吸波材料', value: 3623 }
            ]
        },
        {
            name: '医学领域',
            children: [{ name: '基础医学', value: 4116 }]
        },
        {
            name: '航空领域',
            children: [
                { name: '航空制造业', value: 1616 },
                { name: '军用航空', value: 1027 },
                { name: '民用航空', value: 3891 },
                { name: '民航物流管理', value: 891 },
                { name: '民航旅游管理', value: 2893 },
                { name: '国际空乘', value: 5103 },
                { name: '民航商务信息管理', value: 3677 },
                { name: '航空预科', value: 781 },
                { name: '航材公司', value: 4141 },
                { name: '航空摄影', value: 933 },
                { name: '城市消防', value: 5130 },
                { name: '出租飞行', value: 3617 },
                { name: '个人娱乐飞行', value: 3240 },
                { name: '公务飞行', value: 2732 },
                { name: '海洋监测', value: 2039 },
                { name: '航空护林', value: 1214 },
                { name: '航空俱乐部', value: 3748 },
            ]
        },
        {
            name: '其他',
            children: [
                { name: '雷达检测', value: 2105 },
                { name: '损伤检测', value: 1316 },
                { name: '面积识别', value: 3151 },
                { name: '数据增强', value: 3770 },
                { name: '显著感知', value: 2435 },
                { name: '信号识别', value: 4839 },
            ]
        }
    ]
};
var data2 = {
    name: '应用场景2',
    children: [
        {
            name: '雷达信号',
            children: [{ name: '雷达信号识别', value: 4116 }]
        },
        {
            name: '人工智能',
            children: [
                { name: '机器学习', value: 2105 },
                { name: '深度学习', value: 1316 },
                { name: 'CNN', value: 3151 },
                { name: 'RNN', value: 3770 },
                { name: 'FNN', value: 2435 },
                { name: 'RBM', value: 4839 },
                { name: 'SOM', value: 1756 },
                { name: 'MLP', value: 4268 },
                { name: 'VAE', value: 1821 },
                { name: 'DBN', value: 5833 }
            ]
        },
        {
            name: '图像处理',
            children: [{ name: '二值图像处理', value: 8833 }]
        }
    ]
};

export { data, data2 };