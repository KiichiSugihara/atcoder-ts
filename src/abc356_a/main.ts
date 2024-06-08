import * as fs from "fs";

// 標準入力を読み込む
const str = fs.readFileSync("/dev/stdin", "utf8");

// Inputに対する共通処理
class Input {
  lines: string[];
  index = 0;

  constructor(str: string) {
    this.lines = str.split("\n");
  }

  // 次の行の文字列を取得
  s = (): string => this.lines[this.index++] || "";

  // 次の行の数値を取得
  n = (): number => Number(this.s());

  // string配列をnumber配列に変換
  mn = (v: string[]): number[] => v.map(Number);

  // 文字列をスペースで分割して配列に変換
  sp = (v: string): string[] => v.split(" ");

  // 次の行をスペースで分割して文字列配列を取得
  ss = (): string[] => this.sp(this.s());

  // 次の行をスペースで分割して数値配列を取得
  nn = (): number[] => this.mn(this.ss());

  // 現在のインデックスから全ての行を数値配列として取得
  nls = (): number[] => this.mn(this.lines.slice(this.index));

  // 現在のインデックスから全ての行を数値配列の配列として取得
  nnls = (): number[][] => this.lines.slice(this.index).map((v: string) => this.mn(this.sp(v)));
}

const input = new Input(str);

const main = (): void => {
  // 入力を取得
  const [N, L, R] = input.nn();
  
  // 初期の配列を作成
  const A = Array.from({ length: N }, (_, i) => i + 1);

  // 部分配列を反転
  const left = A.slice(0, L - 1);
  const middle = A.slice(L - 1, R).reverse();
  const right = A.slice(R);

  // 結果の配列を結合
  const result = [...left, ...middle, ...right];

  // 結果を出力
  console.log(result.join(' '));
};

// main関数を実行する
main();
