const path = require('path');
const webpack = require('webpack');

const MODULE_PATH = {
    PIXI: path.join(__dirname, 'node_modules', 'pixi.js'),
    PIXI_TILEMAP: path.join(__dirname, 'node_modules', 'pixi-tilemap'),
    ANIME: path.join(__dirname, 'node_modules', 'animejs'),
    VICTOR: path.join(__dirname, 'node_modules', 'victor')
}

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        filename: 'sylvan.js',
        path: path.resolve(__dirname, 'dist'),
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
          'animejs': MODULE_PATH.ANIME,
          'victor': MODULE_PATH.VICTOR
        }
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
