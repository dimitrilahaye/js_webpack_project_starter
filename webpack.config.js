let path = require('path');

module.exports = {
    entry: ['./src/app.js'], // app.js is my entry point
    output: {
        filename: './bundle.js' // ./dist/bundle.js
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'app'),
                query: {
                    presets: '@babel/preset-env'
                }
            }
        ]
    }
};