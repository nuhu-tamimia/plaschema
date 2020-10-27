import React from 'react';
import './MenuBar.css';

class MenuBar extends React.Component {
    state = { dashboard: null }


    onDashboardSelect = () => {
        this.setState({ dashboard: "/" });
    }

    onAccreditationSelect = () => {
        this.setState({ accreditation: "/" });
    }



    render() {
        return (
            <div className="ui massive vertical menu sideMenu" style={{ backgroundColor: 'green' }}>
                <div className="avatar">
                    <i className="user circle icon"></i>
                </div>
                <div className="ui divider"></div>
                <div className="ui list">
                    <div onClick={this.props.returnToDashboard} className="item">
                        <div className="content">
                            <i className="microsoft icon"></i>
                            <p>Dashboard</p>
                        </div>
                    </div>
                    <div className="ui divider"></div>
                    <div onClick={this.props.showAccreditations} className="item">
                        <div className="content">
                            <i className="check circle icon"></i>
                            <p>Accreditations</p>
                        </div>
                    </div>
                    <div className="ui divider"></div>
                    <div className="item" onClick={this.props.showAccreditations}>
                        <div className="content">
                            <i className="user icon"></i>
                            <p>Enrolment</p>
                        </div>
                    </div>
                    <div className="ui divider"></div>
                    <div className="item">
                        <div className="content">
                            <i className="credit card icon"></i>
                            <a href="">Subscription</a>
                        </div>
                    </div>
                    <div className="ui divider"></div>
                    <div className="item">
                        <div className="content">
                            <i className="clipboard list icon"></i>
                            <a href="">Reports</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default MenuBar;