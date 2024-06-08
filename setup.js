/* eslint-disable @typescript-eslint/no-var-requires */
const shell = require("shelljs");
const config = require("./config");
const problemURL = config.PROBLEM_URL;
const problemName = config.PROBLEM_NAME;
const { exec } = require("child_process");

if (!problemURL || !problemName) {
  console.log("Set URL & Name");
  process.exit(1); // プロセスを終了し、エラーコードを返す
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

const execCommand = "oj d " + problemURL;
exec(execCommand, (err, stdout) => {
  if (err) {
    console.log(err);
  }
  console.log(stdout);
});

// shell.cd('..');
