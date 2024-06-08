# atcoder-ts

## Description

For people who want to do AtCoder by TypeScript

## version

- TypeScript 3.8
- Version Reference https://atcoder.jp/contests/language-test-202001

## Before using

```
npm i
pip install -U online-judge-tools
oj login https://beta.atcoder.jp/
npm run global add atcoder-cli
```

- delete src/\*\*

## When solving a problem

### setup

1.Rewrite config.js

- PROBLEM_URL
- PROBLEM_NAME

  2.Install tests & new work directory
  `npm run setup`

### test

1.Test

`npm run test`

### submit

1.rewrite & use this command

NOTE: We can't run the script of this command because of having interaction.

oj s https://atcoder.jp/contests/abc149/tasks/abc149_a src/abc149_a/main.ts --language 5058

## Reference

- [MyNote](https://scrapbox.io/kii-cafe/setup_AtCoder)
- https://online-judge-tools.readthedocs.io/en/master/introduction.ja.html
