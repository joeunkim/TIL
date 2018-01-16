import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// provider를 선언하면 component 간에 parent-child 구조로 정보를 전달하지 않아도 store접근 가능
import { Provider  } from 'react-redux';
import App from './components/App';
import counterApp from './reducers';

const store = createStore(counterApp);
const appElement = document.getElementById('root');



ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    appElement
);