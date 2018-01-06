import React from 'react';
import ReactDOM from 'react-dom';
import React_example2 from './components/React_example2_';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const rootElement = document.getElementById('root'); 
const Root = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <React_example2 />
    </MuiThemeProvider>
  );   
ReactDOM.render(<Root />, rootElement);
