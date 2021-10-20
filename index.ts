function dotpath(str: any) {
  const parts = str.toString().split(".");
  const len = parts.length;

  return function parse(obj: any) {
    let testKey;

    for (var i = 0; i < len; ++i) {
      testKey = parts[i];

      if (!obj) return;

      obj = obj[testKey];
    }

    return obj;
  };
}

export default dotpath;
