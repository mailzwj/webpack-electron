const base = require('./base');
const uglify = require('uglifyjs-webpack-plugin');

base.mode = 'development';
base.plugins.push(new uglify({
    sourceMap: true
}));

module.exports = base;
