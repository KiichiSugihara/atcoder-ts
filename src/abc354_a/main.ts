import * as fs from "fs";

// 標準入力を読み込む
// ファイルから読み込んだ標準入力の前後の空白や改行を削除
const str = fs.readFileSync("/dev/stdin", "utf8").trim();

// Inputに対する共通処理
class Input {
  lines: string[];
  index = 0;

  constructor(str: string) {
    // 空白や改行で分割し、空の行を除去
    this.lines = str.split(/[\s\n]+/).filter(line => line.trim() !== "");
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
  const A = input.n(); // 1行目の数値を取得
  const B = input.n(); // 2行目の数値を取得
  
  // 問題のロジックをここに書く
  const result = findCulprit(A, B);
  
  // 結果を出力
  console.log(result);
};

// 特定の問題を解く関数（ケーキの犯人特定）
const findCulprit = (A: number, B: number): number => {
  const people = [1, 2, 3];
  // A と B 以外の人を探す
  const suspects = people.filter(person => person !== A && person !== B);
  
  // 一人に絞れるかチェック
  return suspects.length === 1 ? suspects[0] : -1;
};

// main関数を実行する
main();
