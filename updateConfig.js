const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the problem set number (e.g., abc356): ', (setNumber) => {
  rl.question('Enter the problem number (e.g., b): ', (problemNumber) => {
    const configContent = `
let config = {};

config.PROBLEM_URL = "https://atcoder.jp/contests/${setNumber}/tasks/${setNumber}_${problemNumber}";
config.PROBLEM_NAME = "${setNumber}_${problemNumber}";

module.exports = config;
`;

    fs.writeFile('config.js', configContent, (err) => {
      if (err) throw err;
      console.log('config.js has been updated!');
      rl.close();
    });
  });
});