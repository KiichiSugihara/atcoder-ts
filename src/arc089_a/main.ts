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
    const times = Number(input.nnls().slice(0, 1));
    const positions = input.nnls().slice(1, -1);
    // 問題のための関数
    return traveling(times, positions);
  };

  // 問題のための関数
  const traveling = (times: number, positions: number[][]): string => {
    let prev_t = 0;
    let prev_x = 0;
    let prev_y = 0;
    for (let i = 0; i < times; i++) {
      const t = positions[i][0];
      const x = positions[i][1];
      const y = positions[i][2];
      const dt = t - prev_t;
      const d = Math.abs(prev_x - x) + Math.abs(prev_y - y);
      if (d > dt || d % 2 != dt % 2) {
        return "No";
      }
      prev_t = t;
      prev_x = x;
      prev_y = y;
    }

    return "Yes";
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
