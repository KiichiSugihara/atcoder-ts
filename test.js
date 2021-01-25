/* eslint-disable @typescript-eslint/no-var-requires */
const shell = require("shelljs");
const config = require("./config");
const problemURL = config.PROBLEM_URL;
const problemName = config.PROBLEM_NAME;
const exec = require("child_process").exec;

if (!problemURL || !problemName) {
  return "Set URL & Name";
}

const projectURL = "./src/" + String(problemName) + "/";

// ProjectDirへ移動
shell.cd(projectURL);

exec('oj t -c "npx ts-node main.ts"', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
  }
  if (stderr) {
    console.log(stderr);
  }
  if (stdout) {
    console.log("Test Result");
    console.log(stdout);
  }
});
