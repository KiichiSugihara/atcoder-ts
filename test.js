/* eslint-disable @typescript-eslint/no-var-requires */
const shell = require("shelljs");
const config = require("./config");
const problemURL = config.PROBLEM_URL;
const problemName = config.PROBLEM_NAME;
const spawn = require("child_process").spawn;
const chalk = require("chalk");

if (!problemURL || !problemName) {
  return "Set URL & Name";
}

const projectURL = "./src/" + String(problemName) + "/";

// ProjectDirへ移動
shell.cd(projectURL);

const npm_command = "npx ts-node main.ts";
const proc = spawn("oj", ["t", "-c", npm_command]);

console.log("child:" + proc.pid);
proc.stdout.on("data", (data) => {
  const dataStr = data.toString();
  if (dataStr.match(/SUCCESS/)) {
    //strにACを含む場合の処理
    console.log(chalk.green.bold(dataStr));
  } else if (dataStr.match(/FAILURE/)) {
    //strにWAを含む場合の処理
    console.log(chalk.red.bold(dataStr));
  } else if (dataStr.match(/INFO/)) {
    //strにINFOを含む場合の処理
    console.log(chalk.cyan.bold(dataStr));
  } else {
    console.log(dataStr);
  }
});
