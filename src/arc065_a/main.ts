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
    const [texts] = [args[0]];
    return dayDream(texts);
  };

  const dayDream = (texts: string): string => {
    // 正規表現で判断
    // 文字列反転してから正規表現も試したがこちらのほうが早かった
    const checkDayDream = /^((dream)|(dreamer)|(erase)|(eraser))*$/.test(texts);
    if (checkDayDream) {
      return "YES";
    } else {
      return "NO";
    }
  };

  outs.push(main());

  console.log(
    outs
      .map((line) => (typeof line === "object" ? line.join(" ") : String(line)))
      .join("\n")
  );
}
