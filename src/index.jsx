// @ts-nocheck
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './containers/App';
import { registerServiceWorkerForPWA } from './serviceWorker';

import './index.css';

let rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);

registerServiceWorkerForPWA();
