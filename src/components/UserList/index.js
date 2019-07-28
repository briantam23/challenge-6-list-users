import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserList extends Component {
    /* static propTypes = {
        appName: PropTypes.string,
    } */

    render() {
        return(
            <div className="userList">
                <div className="user">
                    <div className="picture">
                        <img src="https://randomuser.me/api/portraits/women/95.jpg" alt="Joy Noel"/>
                    </div>
                    <div className="info">
                        <div className="name">
                            <span>Mrs </span>
                            <span>Joy </span>
                            <span>Noel </span>
                        </div>
                        <div className="email">
                            <span>joy.noel@example.com</span>
                        </div>
                        <div className="phone">
                            <span>(576)-670-5855</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserList;
