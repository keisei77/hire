export const extractStack = (err: Error) => {
  if (!err.stack) {
    return;
  }
  const stackMatchArray = (err.stack.match(/http(.*)/g) || []).slice();
  const stack = stackMatchArray.map((path) => {
    const pathArr = (path.match(/(.*):(\d+):(\d+)/) || []).slice();
    return {
      line: Number(pathArr[2]),
      column: Number(pathArr[3]),
      filename: pathArr[1],
    };
  });
  return stack || [];
};
