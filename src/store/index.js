import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';


const LOAD_INITIAL_USERS = 'LOAD_INITIAL_USERS';

const _loadInitialUsers = users => ({
    type: LOAD_INITIAL_USERS,
    users
});

export const loadInitialUsers = () => (
    dispatch => (
        axios.get('https://randomuser.me/api/?results=20')
            .then(res => res.data)
            .then(users => dispatch(_loadInitialUsers(users)))
    )
)

const usersReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD_INITIAL_USERS:
            return action.users;
        default:
            return state;
    }
}

const reducer = combineReducers({
    users: usersReducer
});

const store = createStore(reducer, applyMiddleware(thunk, logger));


export default store;