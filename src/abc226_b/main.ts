import * as fs from "fs";
{
  type Print = void | string | number | string[] | number[];
  const outs: Print[] = [];
  const str = fs.readFileSync("/dev/stdin", "utf8");

  // Inputに対する共通処理
  class Input {
    lines: string[];
    index = 0;
    constructor(str: string) {
      this.lines = str.trim().split("\n");
    }
    // "a b c ..."→['a','b','c',...]
    sp = (v: string) => v.split("\n");
  }

  const input = new Input(str);

  const main = (): Print => {
    // 問題のための入力処理
    // const i = input.sp()
    // 問題のための関数
    const l = new Set(input.lines);
    return l.size - 1;
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
