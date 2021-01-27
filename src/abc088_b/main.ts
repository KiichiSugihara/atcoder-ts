{
  type Print = void | string | number | string[] | number[];
  const outs: Print[] = [];
  const _io = (i = 0) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const str = require("fs").readFileSync("/dev/stdin", "utf8");
    const lines = str.trim().split("\n");
    const s = () => lines[i++] || "";
    const n = () => Number(s());

    const mn = (v: string[]) => v.map(Number);
    const sp = (v: string) => v.split(" ");

    const ss = () => sp(s());
    const nn = () => mn(ss());
    const nls = () => mn(lines.slice(i));
    const nnls = () => lines.slice(i).map((v: string) => mn(sp(v)));

    return { lines, s, n, ss, nn, nls, nnls };
  };
  const main = (): Print => {
    const r = _io();
    const [N, A] = [
      Number(r.lines[0]),
      r.lines[1].split(" ").map((e: string) => parseInt(e)),
    ];
    // 以下入れ替え
    return cardGameForTwo(N, A);
  };

  const cardGameForTwo = (cardsNumber: number, numbers: number[]): number => {
    // 降順ソート
    numbers.sort((a, b) => b - a);
    let differSum = 0;
    for (let i = 0; i < cardsNumber; i++) {
      // 取得する値は0,2,4と偶数番
      if (i % 2 === 0) {
        differSum += numbers[i];
      } else {
        // 取得される値は1,3,5と偶数番
        differSum -= numbers[i];
      }
    }
    return differSum;
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
