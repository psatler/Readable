import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

/**
 * Redux needed imports
 */
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
registerServiceWorker();
