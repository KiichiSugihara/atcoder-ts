import * as fs from "fs";

// 標準入力を読み込む
const str = fs.readFileSync("/dev/stdin", "utf8");

// Inputに対する共通処理
class Input {
  lines: string[];
  index = 0;

  constructor(str: string) {
    this.lines = str.split("\n").filter(line => line.trim() !== "");
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

// 汎用的な標準入出力テンプレート
const main = (): void => {
  const input = new Input(str);

  // 入力処理の例
  const [N, L, R] = input.nn();
  
  // 問題のロジックをここに書く
  const result = solve(N, L, R);
  
  // 結果を出力
  console.log(result.join(' '));
};

// 特定の問題を解く関数（例としてA - Subsegment Reverseのロジックを実装）
const solve = (N: number, L: number, R: number): number[] => {
  // 初期の配列を作成
  const A = Array.from({ length: N }, (_, i) => i + 1);

  // 部分配列を反転
  const left = A.slice(0, L - 1);
  const middle = A.slice(L - 1, R).reverse();
  const right = A.slice(R);

  // 結果の配列を結合
  return [...left, ...middle, ...right];
};

// main関数を実行する
main();
