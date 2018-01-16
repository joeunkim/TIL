import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import App from './components/App';
import counterApp from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const store = createStore(counterApp);
const appElement = document.getElementById('root');

const Root = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App />
    </MuiThemeProvider>
  ); 

ReactDOM.render(
    <Provider store = {store}>
        <Root />
    </Provider>,
    appElement
);