function parseInput(input: string): number | boolean | string | null | undefined {
    if (input === "null") {
      return null;
    } else if (input === "undefined") {
      return undefined;
    } else if (input === "true" || input === "false") {
      return input === "true";
    } else if (!isNaN(Number(input))) {
      return Number(input);
    } else {
      return input;
    }
  }
  console.log(parseInput("16012005"));
console.log(parseInput("true"));
console.log(parseInput("Nam Sơn"));
console.log(parseInput("null"));
console.log(parseInput("undefined"));