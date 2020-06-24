const shell = require('shelljs');
const config = require('./config');
const problemURL = config.PROBLEM_URL;
const problemName = config.PROBLEM_NAME;
const exec = require('child_process').exec;

if (!problemURL || !problemName) {
  return 'Set URL & Name';
}

const projectURL = './src/' + String(problemName) + '/';

// ProjectDirへ移動
shell.cd(projectURL);

exec('oj t -c "node compile.js"', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
  }
  console.log('Test Result', stderr);
});
