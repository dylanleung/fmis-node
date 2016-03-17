import React, {Component} from 'react';

class HeadBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const username = this.props.username || "DemoUser";
        const helpPhone = this.props.helpPhone || "66000";
        return (
            <div className="hik-layout-ceiling">
                <div className="hik-layout-wrapper">
                    <ul className="right">
                        <li>{username}</li>
                        <li>|</li>
                        <li>帮助中心</li>
                        <li>|</li>
                        <li>客服/投诉电话：{helpPhone}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HeadBar;