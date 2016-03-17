import React, {Component} from 'react';
import DocumentStore from '../../stores/documentStore';
import {Row, Col, Table} from 'antd';
class ReimbSubsidy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: !DocumentStore.docStatus.showSubsidy
        }
        this.unsubscribe = DocumentStore.listen(this.changeHidden.bind(this));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    changeHidden(docStatus) {
        this.setState({ hidden: !docStatus.showSubsidy })
    }
    render() {
        const columns = [{
            title: '日期',
            dataIndex: 'subidyDate'
        }, {
                title: '伙食补贴',
                dataIndex: 'FoodAmount'
            }, {
                title: '住宿补贴',
                dataIndex: 'lodgingAmount'
            }, {
                title: '艰苦补贴',
                dataIndex: 'hardAmount'
            }];
        const data = [{
            key: '1',
            subidyDate: '2016-01-01',
            FoodAmount: '20.00',
            lodgingAmount: '100.00',
            hardAmount: '0.00'
        }, {
                key: '2',
                subidyDate: '2016-01-02',
                FoodAmount: '20.00',
                lodgingAmount: '50.00',
                hardAmount: '0.00'
            }, {
                key: '3',
                subidyDate: '2016-01-03',
                FoodAmount: '20.00',
                lodgingAmount: '10.00',
                hardAmount: '0.00'
            },
            {
                key: '4',
                subidyDate: '2016-01-04',
                FoodAmount: '20.00',
                lodgingAmount: '70.00',
                hardAmount: '0.00'
            }

        ];
        return this.state.hidden ? null : (
            <Row  type="flex" justify="space-between" align="bottom">
                <Col span="24">
                    <div className="hik-table">
                        <Table columns={columns} dataSource={data}  size="small"/>
                    </div>
                </Col>
            </Row >
        );
    }
}

export default ReimbSubsidy;