const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: {
        lodash1: ['lodash', './src/index2.js'],
        main: {
            import: './src/index.js',
            dependOn: 'lodash1'
        },
        // main2: {
        //     // filename: './src/index2.js',
        //     import: './src/index2.js',
        //     dependOn: 'lodash1'
        // },
    },
    output: {
        filename: '[name].main.js',
        // path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin(),
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
      ],
    mode: 'development'
}