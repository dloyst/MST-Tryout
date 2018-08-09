import React from 'react';
import ReactDOM from 'react-dom';
import './junk/index.css';
import App from './App';

import appModel from './models.js';

ReactDOM.render(<App model={appModel} />, document.getElementById('root'));
