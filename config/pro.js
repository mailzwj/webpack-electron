const base = require('./base');
const uglify = require('uglifyjs-webpack-plugin');

base.mode = 'production';
base.plugins.push(new uglify({
    sourceMap: false
}));

module.exports = base;
