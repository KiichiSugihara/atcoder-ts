# atcoder-ts

## version

- TypeScript 3.8
- reference https://atcoder.jp/contests/language-test-202001

## Before using

```
yarn
pip install --user online-judge-tools
oj login https://beta.atcoder.jp/
yarn install -g atcoder-cli
acc login
acc session
```

## setup

rewrite config.js

- PROBLEM_URL
- PROBLEM_NAME

## compile

ここ TypeScript 版に変える
yarn run build

## test

yarn run test

## submit

oj s https://atcoder.jp/contests/abc149/tasks/abc149_a src/abc149_a/compile.js

実装途中
yarn run submit

### Reference

https://online-judge-tools.readthedocs.io/en/master/introduction.ja.html
