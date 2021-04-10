import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import GlobalStyle from '../styles/globalStyles';
import * as theme from '../styles/themeStyles';
import 'antd/dist/antd.css';

import Dashboard from './Dashboard';
import ModalBox from './components/ModalBox';
import allReducers from './functions/redux/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const reduxStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App: React.FC = () => {
  return (
    <>
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ModalBox>
            <Dashboard />
          </ModalBox>
        </ThemeProvider>
      </Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
