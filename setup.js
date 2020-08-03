/* eslint-disable @typescript-eslint/no-var-requires */
const shell = require("shelljs");
const config = require("./config");
const problemURL = config.PROBLEM_URL;
const problemName = config.PROBLEM_NAME;
const exec = require("child_process").exec;

if (!problemURL || !problemName) {
  return "Set URL & Name";
}

console.log(problemURL, problemName);
// make projectDir
const projectURL = "./src/" + String(problemName) + "/";
shell.mkdir("-p", projectURL);
// Copy file
const fileURL = projectURL + "main.ts";
shell.cp("-R", "./templates/main.ts", fileURL);
// PDirへ移動
shell.cd(projectURL);

const exexCommand = "oj d " + problemURL;
exec(exexCommand, (err, stdout) => {
  if (err) {
    console.log(err);
  }
  console.log(stdout);
});

// shell.cd('..');
