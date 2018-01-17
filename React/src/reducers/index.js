import { INCREMENT, DECREMENT, RESET, SET_DIFF, HANDLE_OPEN, HANDLE_CLOSE } from '../actions/index.js';
import { combineReducers } from 'redux';

const counterInitialState = {
    value: 0,
    diff: 1,
    open: 'false'
};


const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case RESET:
            return Object.assign({}, state, {
                value : 0,
                open: false
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        case HANDLE_OPEN:
            return Object.assign({}, state, {
                open : true
            });
        case HANDLE_CLOSE:
            return Object.assign({}, state, {
                open : false
            });
        
        default:
            return state;
    }
};


const counterApp = combineReducers({
    counter
});

export default counterApp;