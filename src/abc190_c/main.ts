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
    return bowlsAndDishes(input.nnls());
  };

  // 問題のための関数
  const bowlsAndDishes = (inputs: number[][]): number => {
    // input処理
    const [N, M] = [inputs[0][0], inputs[0][1]];
    const K = inputs.slice(M + 1, M + 2)[0][0];
    const ABs = inputs.slice(1, M + 1);
    const CDs = inputs.slice(M + 2, M + 2 + K);
    console.log(N, ABs, CDs);

    return 1;
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
