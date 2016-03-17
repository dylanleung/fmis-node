import React, {Component} from 'react';
import {Row, Col, Button, Icon} from 'antd';
import _ from 'lodash';
import DocumentAction from '../../actions/documentAction';
/**
 * 报销工具栏
 */
class ReimbToolBar extends Component {
    constructor(props) {
        super(props);
    }

    changeError() {
        DocumentAction.triggerError();
    }

    saveFlow() {

    }
    submitFlow() {

    }
    printFlow() {

    }
    showButton() {

        const buttons = this.props.buttons || ['save', 'submit'];
        const buttonChildren = _.flatMap(buttons, (k) => {
            let bt = (<div></div>);
            if (k === 'save')
                bt = (<Button type="ghost"  onClick={this.saveFlow.bind(this) }><Icon type="save" /><span>保存</span></Button>);
            else if (k === 'submit')
                bt = (<Button type="ghost"  onClick={this.submitFlow.bind(this) }><Icon type="laptop" /><span>提交</span></Button>);
            return (
                <li key={k}>
                    {bt}
                </li>
            );

        });
        return buttonChildren;
    }
    render() {
        const bts = this.showButton();
        return (
            <div>
                <Row>
                    <Col span="4">
                        <ul className="left hik-button">
                            <li key="error">
                                <Button type="ghost"  onClick={this.changeError.bind(this) }><Icon type="exclamation-circle" /></Button>
                            </li>
                            <li key="print">
                                <Button type="ghost"  onClick={this.printFlow.bind(this) }><Icon type="export" /></Button>
                            </li>
                        </ul>

                    </Col>
                    <Col span="20">
                        <ul className="right hik-button">
                            {bts}
                        </ul>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default ReimbToolBar;