type KeyValueObjectOrType<KeyValueType> =
  | {
      [key: string]: KeyValueType;
    }
  | KeyValueType;
/**
 *
 * @param str path to value you want to lookup
 * @returns function to get value at path
 * @example
 * import dotpath from "dotpath"
 * const lookupName = dotpath("name")
 * const name = lookupName({name: "Joe"})
 * console.log(name) // "Joe"
 */
function dotpath(str: string) {
  const parts = str.split(".");
  const len = parts.length;

  return function parse(obj: any): any {
    // Could be a key in an object
    // or an index in an array
    let testKey: string | number;

    for (var i = 0; i < len; ++i) {
      testKey = parts[i];

      if (!obj) return;

      obj = obj[testKey];
    }

    return obj;
  };
}

export default dotpath;
