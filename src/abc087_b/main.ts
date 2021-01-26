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
    const s = r.nnls();
    const [number500, number100, number50, sumX] = [
      Number(s[0][0]),
      Number(s[1][0]),
      Number(s[2][0]),
      Number(s[3][0]),
    ];
    // 以下入れ替え
    return coins(number500, number100, number50, sumX);
  };

  const coins = (
    number500: number,
    number100: number,
    number50: number,
    sumX: number
  ): number => {
    return number500 + number100 + number50 + sumX;
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
