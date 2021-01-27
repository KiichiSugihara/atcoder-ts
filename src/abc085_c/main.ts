{
  type Print = void | string | number | string[] | number[];
  const outs: Print[] = [];
  const _io = () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const str = require("fs").readFileSync("/dev/stdin", "utf8");
    const lines = str.trim().split("\n");
    return { lines };
  };
  const main = (): Print => {
    const args = _io().lines;
    const [paperNumber, sumOtoshidama] = [
      args[0].split(" ")[0],
      args[0].split(" ")[1],
    ];
    return checkOtoshidama(paperNumber, sumOtoshidama);
  };

  const checkOtoshidama = (
    paperNumber: number,
    sumOtoshidama: number
  ): string => {
    // 1000の倍数で割っておく
    const divideSumOtoshidama = sumOtoshidama / 1000;
    // 例外を先に除去
    if (
      divideSumOtoshidama < paperNumber ||
      10 * paperNumber < divideSumOtoshidama
    ) {
      return "-1 -1 -1";
    }
    for (let z = paperNumber; z >= 0; z--) {
      // paperNumber=x+y+zとdivideSumOtoshidama=10x+5y+zの連立方程式からx消して，y出す
      const y = (10 * paperNumber - 9 * z - divideSumOtoshidama) / 5;
      // 残り5000円で表す値は5で割れる且つ正を利用
      if (!Number.isInteger(y) || y < 0 || paperNumber < y + z) {
        continue;
      }
      const x = paperNumber - y - z;
      return `${x} ${y} ${z}`;
    }
    return "-1 -1 -1";
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
