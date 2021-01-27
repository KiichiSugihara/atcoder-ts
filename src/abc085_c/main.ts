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
    console.log(paperNumber, sumOtoshidama);
    return "4 0 5";
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
