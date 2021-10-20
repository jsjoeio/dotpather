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

  return function parse<KeyValueType>(obj: {
    [key: string]: KeyValueType;
  }): KeyValueType | undefined {
    if (!obj) return undefined;
    // Could be a key in an object
    // or an index in an array
    let testKey: string | number;
    let result: KeyValueType | undefined = undefined;

    for (let i = 0; i < len; ++i) {
      testKey = parts[i];

      // @ts-ignore
      // TODO@jsjoeio fix me
      // we should not be m/utating the original object
      // also fix broken tests
      result = obj[testKey];
    }

    return result;
  };
}

export default dotpath;
