import React, {Component} from 'react';
import { Row, Col, Button } from 'antd';
import History from './history';
import DocumentAction from '../../actions/documentAction';
/**
 * 报销标题
 */
class reimbTitle extends Component {
    constructor(props) {
        super(props);
    }
    changeHeader() {
        DocumentAction.triggerHeader();
    }
    changeTotal() {
        DocumentAction.triggerTotal();
    }
    changeSubidy() {
        DocumentAction.triggerSubidy();
    }
    render() {
        return (
            <div className ="hik-layout-title">
                <div className="hik-layout-wrapper">
                    <Row>
                        <Col span="5" offset="1">

                            <div className="hik-layout-logo">
                                <Button type="primary" onClick={this.changeHeader.bind(this) }>
                                    T600000001
                                </Button>
                            </div>
                        </Col>
                        <Col span="11" offset="1">
                            <History />
                        </Col>
                        <Col span="5" offset="1">
                            <ul className='right'>
                                <li>
                                    <Button type="dashed" onClick={this.changeTotal.bind(this) }>
                                        <div className="inner">
                                            <div className="number">
                                                134.11
                                            </div>
                                            申请总额
                                        </div>
                                    </Button>
                                </li>
                                <li>
                                    <Button type="dashed" onClick={this.changeSubidy.bind(this) }>
                                        <div className="inner">
                                            <div className="number">
                                                11.12
                                            </div>
                                            补贴总额
                                        </div>
                                    </Button>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default reimbTitle;