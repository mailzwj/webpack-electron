import React, { Component } from 'react';
import { render } from 'react-dom';

import './login.less';

const electron = require('electron');
const { ipcRenderer } = electron;

class Login extends Component {
    constructor() {
        super();
    }

    handleClose = () => {
        window.close();
    }

    render() {
        return (
            <div className="p-login" onClick={this.handleClose}>
                Login...Click to close this window!
            </div>
        );
    }
}

const pageWrap = document.createElement('div');
pageWrap.className = 'page-wrap';
document.body.appendChild(pageWrap);

render(<Login />, pageWrap);
