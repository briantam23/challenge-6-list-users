import React from 'react';
import './styles/App.css';
import './styles/userList.css';
import Header from './components/Header';
import UserList from './components/UserList';


const App = () => (
    <div className="App">
        <Header appName="SuperDate"/>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserList/>
    </div>
);


export default App;
