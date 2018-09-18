const path = require('path')
module.exports = {
    entry: path.join(__dirname, 'app', 'test.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'mylib'
    },
    devtool: 'source-map'
};