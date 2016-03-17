import React, {Component} from 'react';
import {Steps} from 'antd';
class History extends Component {
    render() {
        const Step = Steps.Step;
        const steps = [{
            status: 'finish',
            title: '已完成'
        }, {
                status: 'process',
                title: '进行中'
            }, {
                status: 'wait',
                title: '待运行'
            }, {
                status: 'wait',
                title: '待运行'
            }].map((s, i) => <Step key={i} title={s.title} description={s.description} />);
        return (
            <div className="hik-layout-history">
                <Steps size="small" current={1}>{steps}</Steps>
            </div>
        );
    }
}

export default History;