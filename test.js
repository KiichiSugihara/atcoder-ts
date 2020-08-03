import { cd } from "shelljs";
import { PROBLEM_URL, PROBLEM_NAME } from "./config";
const problemURL = PROBLEM_URL;
const problemName = PROBLEM_NAME;
import { exec } from "child_process";

if (!problemURL || !problemName) {
  return "Set URL & Name";
}

const projectURL = "./src/" + String(problemName) + "/";

// ProjectDirへ移動
cd(projectURL);

exec('oj t -c "npx ts-node main.ts"', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
  }
  console.log("Test Result", stderr);
});
