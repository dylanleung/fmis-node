import React, {Component} from 'react';
import ReimbHeader from './reimbHeader';
import HeadBar from './headBar';
import ReimbTotal from './reimbTotal';
import ReimbTitle from './reimbTitle';
import {Row,Col,Button} from 'antd';

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
                        <ReimbHeader />
                        <ReimbTotal />
                    </div>
                    <Row>
                        <Col span="4" offset="20">
                            <Button type="ghost" >补贴</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default ReimbApp;