import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
    static propTypes = {
        appName: PropTypes.string,
    }

    render() {
        const { appName } = this.props;
        return(
            <header className="App-header">
                <h1>{ appName }</h1>
            </header>);
    }
}

export default Header;
