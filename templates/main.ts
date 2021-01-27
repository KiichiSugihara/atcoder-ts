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
    const [mochies] = [
      args
        // ０個目の餅数排除
        .filter((_: string, index: number) => index > 0)
        // 要素をnumberに変換
        .map((o: string) => parseInt(o, 10)),
    ];
    return kagamiMochi(mochies);
  };

  const kagamiMochi = (mochies: number[]): number => {
    // 降順で並べる
    mochies.sort((a, b) => b - a);
    let count = 0;
    let currentWidth: number | undefined;
    mochies.forEach((mochiWidth) => {
      // 最初
      if (currentWidth === undefined) {
        currentWidth = mochiWidth;
        count += 1;
        return;
      }
      if (currentWidth === mochiWidth) {
        return;
      }
      currentWidth = mochiWidth;
      count += 1;
    });
    return count;
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
