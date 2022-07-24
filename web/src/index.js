import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import App from './App';
import {initCasdoorSdk} from './utils/setting'
import casdoorConfig from './config/casdoor'

initCasdoorSdk(casdoorConfig)
ReactDOM.render(<App></App>,document.getElementById("root"))
