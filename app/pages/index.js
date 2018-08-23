import React, { Component } from 'react';
import { render } from 'react-dom';

import Index from '../components/Index';

const pageWrap = document.createElement('div');
pageWrap.className = 'page-wrap';
document.body.appendChild(pageWrap);

render(<Index />, pageWrap);
