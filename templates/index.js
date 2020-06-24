'use strict';
import * as fs from 'fs';
import 'core-js';
// import bigInt from 'big-integer'

// inputに入力データ全体が入る
function main(input_raw) {
  const input = input_raw.split('\n');
  // 1行目がinput[0], 2行目がinput[1], …に入る
  // input[0]に' 'で分けられてる
  const inputs0 = input.split[0].split(' ');
  const inputs1 = input.split[1].split(' ');
  //文字列から10進数に変換するときはparseIntを使います
  const a1 = parseInt(inputs0[0], 10);
  const a2 = parseInt(inputs0[1], 10);
  const b1 = parseInt(inputs1[2], 10);
  //出力
  console.log(a1, a2, b1);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
