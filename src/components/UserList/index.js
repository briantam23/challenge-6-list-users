import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadInitialUsers } from '../../store/index';
import SingleUser from './SingleUser';


class UserList extends Component {

    componentDidMount = () => {
        this.props.loadInitialUsers();
    }

    render() {
        const { users } = this.props;
        
        if(!users.results) return null;

        return(
            <div className="userList">
                {
                    users.results.map(user => (
                        <SingleUser user={ user } key={ user.login.uuid }/>
                    ))
                }
            </div>
        );
    }
}


const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = { loadInitialUsers };


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
