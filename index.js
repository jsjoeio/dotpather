"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function dotpath(str) {
    var parts = str.split(".");
    var len = parts.length;
    return function parse(obj) {
        if (!obj)
            return undefined;
        // Could be a key in an object
        // or an index in an array
        var testKey;
        var result = undefined;
        for (var i = 0; i < len; ++i) {
            testKey = parts[i];
            // @ts-ignore
            // TODO@jsjoeio fix me
            // we should not be mutating the original object
            result = obj[testKey];
        }
        return result;
    };
}
exports.default = dotpath;
