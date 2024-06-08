# atcoder-ts

## Description

For people who want to do AtCoder by TypeScript

## Before using(Docker)

```ex.sh
docker-compose build
docker-compose up
docker-compose exec atcoder /bin/bash
oj login https://beta.atcoder.jp/
```

## Before using(Local)

```ex.sh
npm i
pip install -U online-judge-tools
oj login https://beta.atcoder.jp/
npm run global add atcoder-cli
```

- delete src/\*\*

## When solving a problem

If you use Docker
`docker-compose up`
`docker-compose exec atcoder /bin/bash`

### Setup

1. Setup problem number
`npm run updateConfig`

2. Setup problem base files
`npm run setup`

### Test

1.Test

`npm run test`

### Submit

1.rewrite & use this command

NOTE: We can't run the script of this command because of having interaction.

oj s https://atcoder.jp/contests/abc149/tasks/abc149_a src/abc149_a/main.ts --language 5058

## Reference

- [MyNote](https://scrapbox.io/kii-cafe/setup_AtCoder)
- https://online-judge-tools.readthedocs.io/en/master/introduction.ja.html
