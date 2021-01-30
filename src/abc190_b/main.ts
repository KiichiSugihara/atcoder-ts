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
      this.lines = str.split("\n");
    }
    s = () => this.lines[this.index++] || "";
    n = () => Number(this.s());

    mn = (v: string[]) => v.map(Number);
    sp = (v: string) => v.split(" ");

    ss = () => this.sp(this.s());
    nn = () => this.mn(this.ss());
    nls = () => this.mn(this.lines.slice(this.index));
    // number[][]で扱いたい時
    nnls = () =>
      this.lines.slice(this.index).map((v: string) => this.mn(this.sp(v)));
  }

  const input = new Input(str);

  const main = (): Print => {
    // 問題のための入力処理
    // 問題のための関数
    return magic3(input.nnls());
  };

  // 問題のための関数
  const magic3 = (input: number[][]): string => {
    const [N, S, D] = [input[0][0], input[0][1], input[0][2]];

    for (let i = 1; i < N + 1; i++) {
      if (input[i][0] < S && D < input[i][1]) {
        return "Yes";
      }
    }
    return "No";
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
