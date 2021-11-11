import React, { useState, useEffect } from 'react'
import moment from 'moment'
import timeStyles from './index.module.less'

export default function Time() {
    const [now, setNow] = useState(moment())  // 会返回当前状态的属性 和修改状态的方法

    useEffect(() => {  // 可以在函数组件内处理生命周期事件，默认情况，每次渲染都会调用该函数
        const t = setInterval(() => {
            setNow(moment())
        }, 1000)

        return () => {  // 每次卸载都执行此函数，清楚定时器
            clearTimeout(t)
        }
    }, [])

    return (
        <div className={timeStyles.time}>
            <span className={timeStyles.time_date}>{now.format('YYYY-MM-DD')}</span>
            <div className={timeStyles.gap}></div>
            <span className={timeStyles.time_time}>{now.format('HH:mm:ss')}</span>
        </div>
    )
}

