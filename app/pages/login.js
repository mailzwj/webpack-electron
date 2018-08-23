import React, { Component } from 'react';
import { render } from 'react-dom';

import Login from '../components/Login';

const pageWrap = document.createElement('div');
pageWrap.className = 'page-wrap';
document.body.appendChild(pageWrap);

render(<Login />, pageWrap);
