# atcoder-ts

## Description

For people who want to do AtCoder by TypeScript

## version

- TypeScript 3.8
- Version Reference https://atcoder.jp/contests/language-test-202001

## Before using

```
yarn
pip install -U online-judge-tools
oj login https://beta.atcoder.jp/
yarn install -g atcoder-cli
```

- delete src/\*\*

## When solving a problem

### setup

1.Rewrite config.js

- PROBLEM_URL
- PROBLEM_NAME

  2.Install tests & new work directory
  `yarn setup`

### test

1.Test

`yarn run test`

### submit

1.rewrite & use this command

`oj s https://atcoder.jp/contests/abc149/tasks/abc149_a src/abc149_a/main.ts

## Reference

- [MyNote](https://scrapbox.io/kii-cafe/setup_AtCoder)
- https://online-judge-tools.readthedocs.io/en/master/introduction.ja.html
