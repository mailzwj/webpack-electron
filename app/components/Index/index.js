import React, { Component } from 'react';
import { render } from 'react-dom';

const electron = require('electron');
const remote = electron.remote;
const path = require('path');

import './index.less';

class Index extends Component {
    constructor() {
        super();

        this.win = null;
    }

    handleClick = () => {
        this.win = new remote.BrowserWindow({
            width: 400,
            height: 300
        });

        const pageUrl = path.join('file://', remote.app.getAppPath(), 'dist/login.html');
        this.win.loadURL(pageUrl);

        this.win.on('close', () => {
            this.win = null;
        });
    }

    render() {
        return (
            <div className="p-index">
                <div className="welcome">Hello world</div>
                <input type="button" className="btn" value="New window" onClick={this.handleClick} />
            </div>
        );
    }
}

export default Index;
