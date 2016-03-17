import React, {Component} from 'react';
import DocumentStore from '../../stores/documentStore';
import {Row,Col,Table} from 'antd';
class ReimbTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: !DocumentStore.docStatus.showTotal
        }
        this.unsubscribe = DocumentStore.listen(this.changeHidden.bind(this));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    changeHidden(docStatus) {
        this.setState({ hidden: !docStatus.showTotal })
    }
    render() {
        const columns = [{
            title: '类别',
            dataIndex: 'totalTypeName'
        }, {
                title: '金额',
                dataIndex: 'totalAmount'
            }, {
                title: '超标金额',
                dataIndex: 'overAmount'
            }];
        const data = [{
            key: '1',
            totalType: 'a',
            totalTypeName: '长途交通',
            totalAmount: '1000.00',
            overAmount: '0.00'
        }, {
                key: '2',
                totalType: 'b',
                totalTypeName: '住宿',
                totalAmount: '201.20',
                overAmount: '0.00'
            }, {
                key: '3',
                totalType: 'c',
                totalTypeName: '市内交通',
                totalAmount: '224.10',
                overAmount: '131'
            },
            {
                key: '4',
                totalType: 'z',
                totalTypeName: '汇总',
                totalAmount: '3000',
                overAmount: '0.00'
            }

        ];
        return this.state.hidden ? (<div></div>) : (
            <Row  type="flex" justify="space-between" align="bottom">
                <Col span="24">
                    <Table columns={columns} dataSource={data} pagination={false} />
                </Col>
            </Row >
        );
    }
}

export default ReimbTotal;