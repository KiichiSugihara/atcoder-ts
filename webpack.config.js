const config = require('./config');
const problemURL = config.PROBLEM_URL;
const problemName = config.PROBLEM_NAME;
const projectDir = `${__dirname}/src/` + problemName;
const entryFile = projectDir + '/' + 'index.js';
module.exports = {
  target: 'node',
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: entryFile,
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: projectDir,
    // 出力ファイル名
    filename: 'compile.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  mode: 'production'
};
