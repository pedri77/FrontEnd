const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
    filename: 'bundle[hash].js',
    path: path.resolve(__dirname, 'dist') 
  }, 
};