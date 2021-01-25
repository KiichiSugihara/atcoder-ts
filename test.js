/* eslint-disable @typescript-eslint/no-var-requires */
const shell = require("shelljs");
const config = require("./config");
const problemURL = config.PROBLEM_URL;
const problemName = config.PROBLEM_NAME;
const spawn = require("child_process").spawn;

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
  console.log(data.toString());
});
