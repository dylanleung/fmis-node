import React, {Component} from 'react';
import { Form, Input, Row, Col, Select, Switch, Cascader} from 'antd';
import DocumentStores from '../../stores/documentStore';
import _ from 'lodash';
class ReimBHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: !DocumentStores.docStatus.showHeader
        }
        this.unsubscribe = DocumentStores.listen(this.changeHidden.bind(this));
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    changeHidden(docStatus) {
        this.setState({ hidden: !docStatus.showHeader })
    }
    onUserChange(value, selectedOptions) {
        this.setState({
            userId: value[0],
            deptCode: value[1],
            companyCode: value[2]
        });
    }

    onTypeChange(value) {
        this.setState({ reimbType: value });
    }



    render() {
        const FormItem = Form.Item;
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 }
        };
        const defaultValue = ['HZ0001', '00001', '8100'];

        const userOptions = [{
            value: 'HZ0001',
            label: 'DemoUser',
            children: [{
                value: '00001',
                label: '流程与IT',
                children: [{
                    value: '8100',
                    label: '杭州海康威视数字技术股份有限公司'
                }]
            }, {
                    value: '00002',
                    label: 'Miami',
                    children: [{
                        value: '8501',
                        label: 'USA'
                    }]
                }]
        }];

        const Option = Select.Option;
        const typeChildren =
            _.flatMap(this.props.typeOption || [{ value: '0', label: '普通差旅' }, { value: '1', label: '会议差旅' }, { value: '2', label: '会议差旅' }], (k) => {
                return <Option key={k.value}>{k.label}</Option>;
            });
        const snackNode = (this.state.reimbType && this.state.reimbType !== '0') ?
            (<Col span="3">
                <FormItem
                    label="是否包餐:"
                    labelCol= {{ span: 10 }}
                    wrapperCol= {{ span: 14 }}>
                    <Switch checkedChildren="是" unCheckedChildren="否" />
                </FormItem>
            </Col>) :
            (<Col span="3"> </Col>);

        return this.state.hidden ? (<div></div>) : (
            <Row  type="flex" justify="space-between" align="bottom">
                <Col span="24">
                    <Form horizontal className="hik-header-form">
                        <Row>
                            <Col span="3">
                                <FormItem labelCol= {{ span: 10 }}
                                    wrapperCol= {{ span: 14 }}
                                    label="差旅类型:" >
                                    <Select defaultValue={this.state.reimbType || '0'}  onChange={this.onTypeChange.bind(this) }  style={{ width: '100%' }}>
                                        {typeChildren}
                                    </Select>
                                </FormItem>
                            </Col>
                            {snackNode}
                            <Col span="18">
                                <FormItem
                                    label="报销用户:"
                                    labelCol= {{ span: 2 }}
                                    wrapperCol= {{ span: 22 }}>
                                    <Cascader options={userOptions} onChange={this.onUserChange.bind(this) }  size="small" defaultValue={defaultValue} style={{ width: '100%' }} allowClear={ 'false'}/>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24">
                                <FormItem
                                    label="事由:"
                                    labelCol={{ span: 1 }}
                                    wrapperCol={{ span: 23 }} >
                                    <Input type="textarea" placeholder="商业目的" />
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row >
        );
    }
}

export default ReimBHeader;