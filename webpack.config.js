const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
    filename: 'bundle[hash].js',
    path: path.resolve(__dirname, 'dist') 
    }, 
    devServer: {
    open: true,
    overlay: true,
    port: 3000,
    hot: true
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
            title: 'Front End Avanzado PLAY',
            template: path.join(__dirname, 'src', 'index')
        }
        )
    ],
    rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: "babel-loader"
          },
    ],
    rules: [
              {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
              },
            ],
    
    
};