// import std = require('tstl')

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
    // 距離変数
    const distance = s[0][1];
    // 座標集合
    // 関数
    // 以下入れ替え
    return getCoordinatesWithinDistanceFromX(s, distance, [0, 0]);
  };
  // 以下 関数書く
  const getCoordinatesWithinDistanceFromX = (
    coordinates: Array<number>,
    distance: number,
    xMatrix: Array<number>
  ): number => {
    console.log(coordinates);
    console.log(distance);
    console.log(xMatrix);
    return distance;
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
