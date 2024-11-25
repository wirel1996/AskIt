const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/assets/javascripts/application.js',  // Ваш главный JS файл
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),  // Папка для скомпилированных файлов
    filename: 'bundle.js',  // Имя выходного JS файла
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Обработка JS файлов
        exclude: /node_modules/,
        use: 'babel-loader',  // Использование Babel для транспиляции JS
      },
      {
        test: /\.scss$/,  // Обработка SCSS файлов
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',  // Компиляция SCSS в CSS
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json']
  }
};
