import React, {Component} from 'react';

import HeadBar from './headBar';
import {QueueAnim} from 'antd';
import ReimbTitle from './reimbTitle';
import ReimbHeader from './reimbHeader';
import ReimbTotal from './reimbTotal';
import ReimbError from './reimbError';
import ReimbSubsidy from './reimbSubsidy';
import ReimbToolBar from './reimbToolBar';

import {Row, Col, Button} from 'antd';

class ReimbApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hik-layout-ceiling-main">
                <HeadBar/>
                <ReimbTitle/>
                <div className ="hik-layout-header">
                    <div className="hik-layout-wrapper">
                    <QueueAnim  type="bottom" leaveReverse>
                        <ReimbHeader />
                        <ReimbTotal />
                        <ReimbError />
                        <ReimbSubsidy />
                        </QueueAnim>
                    </div>

                </div>
                <div className ="hik-layout-header">
                    <div className="hik-layout-wrapper">
                        <ReimbToolBar />
                    </div>
                </div>
            </div>
        );
    }
}

export default ReimbApp;