const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
       legth: './server.js',
        weight: './weight.js'
    }, // your entry points
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        fallback: {
            global: require.resolve('global'),
        },
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Serve files from 'dist'
        port: 3000, // Port for the dev server
        open: true, // Automatically open the browser
    },
    resolve: {
        fallback: {
            global: require.resolve('global'), // Polyfill for Node.js `global`
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i, // Matches CSS files
                use: ['style-loader', 'css-loader'], // Loaders to process CSS
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Path to your HTML file
        }),
    ],
};
