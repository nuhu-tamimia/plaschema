import React from 'react';
// import './MenuBar.css';

const MenuBar = ({menu}) => {
    return (
        <div className="ui massive vertical menu" style={{backgroundColor: 'green'}}>
            <div classname="avatar">
                <i class="user circle icon"></i>
            </div>
            <div class="ui divider"></div>
            <div class="ui list">
            <div class="item">
                <div class="content">
                    <i class="microsoft icon"></i>
                    <a href="">Dashboard</a>
                </div>
            </div>
            <div class="ui divider"></div>
            <div class="item">
                <div class="content">
                <i class="check circle icon"></i>
                <a href="">Accreditations</a>
                </div>
            </div>
            <div class="ui divider"></div>
            <div class="item">
                <div class="content">
                <i class="user icon"></i>
                <a href="">Enrolment</a>
                </div>
            </div>
            <div class="ui divider"></div>
            <div class="item">
                <div class="content">
                <i class="credit card icon"></i>
                <a href="">Subscription</a>
                </div>
            </div>
            <div class="ui divider"></div>
            <div class="item">
                <div class="content">
                <i class="clipboard list icon"></i>
                <a href="">Reports</a>
                </div>
            </div>
            </div>
        </div>
    )

};

export default MenuBar;