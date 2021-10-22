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
        // Could be a key in an object
        // or an index in an array
        var testKey;
        for (var i = 0; i < len; ++i) {
            testKey = parts[i];
            if (!obj)
                return;
            obj = obj[testKey];
        }
        return obj;
    };
}
exports.default = dotpath;
