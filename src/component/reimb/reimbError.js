import React, {Component} from 'react';
import DocumentStore from '../../stores/documentStore';
import {Row, Col, Table} from 'antd';
class ReimbError extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: !DocumentStore.docStatus.showError
        }
        this.unsubscribe = DocumentStore.listen(this.changeHidden.bind(this));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    changeHidden(docStatus) {
        this.setState({ hidden: !docStatus.showError })
    }
    render() {
        const columns = [{
            title: '费用类型',
            dataIndex: 'expenseType'
        }, {
                title: '错误提示',
                dataIndex: 'errorMessage'
            }];
        const data = [{
            key: '1',
            expenseType: '交通',
            errorMessage: '没有填写日期，金额超过100.00'
        }, {
                key: '2',
                expenseType: '住宿',
                errorMessage: '日期不在有效范围内'
            }

        ];
        return this.state.hidden ?null : (
            <Row  type="flex" justify="space-between" align="bottom">
                <Col span="24">
                    <div className="hik-table">
                        <Table columns={columns} dataSource={data} pagination={false} size="small"/>
                    </div>
                </Col>
            </Row >
        );
    }
}

export default ReimbError;