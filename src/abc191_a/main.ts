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
    // 使うとindex足されて、index+1の行の文字列取得
    s = () => this.lines[this.index++] || "";
    // 使うとindex足されて、index+1の行のnumber取得
    n = () => Number(this.s());
    // string[]→number[]
    mn = (v: string[]) => v.map(Number);
    // "a b c ..."→['a','b','c',...]
    sp = (v: string) => v.split(" ");

    ss = () => this.sp(this.s());
    nn = () => this.mn(this.ss());
    // indexの行の文字列取得
    nls = () => this.mn(this.lines.slice(this.index));
    // 前半別の方法で取得も良い
    // number[][]で扱いたい時
    nnls = () =>
      this.lines.slice(this.index).map((v: string) => this.mn(this.sp(v)));
  }

  const input = new Input(str);

  const main = (): Print => {
    // 問題のための入力処理
    const [a, b, c] = [
      input.nnls()[0][0],
      input.nnls()[0][1],
      input.nnls()[0][2],
    ];
    // 問題のための関数
    return veryVeryPrimitiveGame(a, b, c);
  };

  // 問題のための関数
  const veryVeryPrimitiveGame = (a: number, b: number, c: number): string => {
    if (a === b) {
      if (c === 0) {
        return "Aoki";
      }
      return "Takahashi";
    } else if (a < b) {
      return "Aoki";
    } else return "Takahashi";
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
