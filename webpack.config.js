const path = require('path');
const webpack = require('webpack');

const MODULE_PATH = {
    PIXI: path.join(__dirname, 'node_modules', 'pixi.js'),
    PIXI_TILEMAP: path.join(__dirname, 'node_modules', 'pixi-tilemap'),
    VICTOR: path.join(__dirname, 'node_modules', 'victor')
}

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        filename: 'sylvan.js',
        path: path.resolve(__dirname, 'build'),
        library: 'Sylvan',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    module: {
       rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                          "@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            },
            { 
                test: /\.json$/, 
                include: [
                    MODULE_PATH.PIXI
                ],
                loader: 'json'
            },
            {
                include: [
                    MODULE_PATH.PIXI,
                    MODULE_PATH.VICTOR
                ],
                loader: 'transform-loader?brfs'
            }
       ],
    },
    resolve: {
        alias: {
          'pixi.js': MODULE_PATH.PIXI,
          'pixi-tilemap': MODULE_PATH.PIXI_TILEMAP,
          'victor': MODULE_PATH.VICTOR
        }
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
