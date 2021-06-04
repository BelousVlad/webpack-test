const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: {
            import: './src/index.js'
        },
        main2: {
            // filename: './src/index2.js',
            import: './src/index2.js'
        }
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
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              type: 'css/mini-extract',
              test: /\.css$/,
              chunks: 'all',
              enforce: true,
            },
          },
        },
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
        }),
      ],
    mode: 'development'
}