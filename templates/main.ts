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
    const [numberA, numberB, numberC, text] = [
      s[0][0],
      s[1][0],
      s[1][1],
      r.lines[2],
    ];
    // 以下入れ替え
    return practice01(numberA, numberB, numberC, text);
  };

  const practice01 = (
    numberA: number,
    numberB: number,
    numberC: number,
    text: string
  ): string => {
    return String(numberA + numberB + numberC) + " " + text;
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
