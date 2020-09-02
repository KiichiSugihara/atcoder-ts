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
    const length = r.lines[0];
    const text = r.lines[1];
    // 以下入れ替え
    return checkDoubleString(length, text);
  };

  /**
   * check double of  a string
   *
   * @param length - the string length
   * @param text - the string
   * @returns "Yes" or "No"
   *
   */
  const checkDoubleString = (length: number, text: string): string => {
    // 奇数なら繰り返しできない
    if (length % 2 !== 0) {
      return "No";
    } else {
      const [frontText, backText] = [
        text.substr(0, length / 2),
        text.substr(length / 2, length / 2),
      ];
      if (frontText === backText) {
        return "Yes";
      }
      return "No";
    }
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
