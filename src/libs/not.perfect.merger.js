/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target, sources) {
  if (!sources.length) return target;

  const __merge = (__target, __source) => {
    if (isObject(__target) && isObject(__source)) {
      for (const key in __source) {
        if (isObject(__source[key])) {
          if (!__target[key]) Object.assign(__target, { [key]: {} });
          __merge(__target[key], __source[key]);
        } else {
          Object.assign(__target, { [key]: __source[key] });
        }
      }
    }
  };

  for (const key in sources) {
    __merge(target, sources[key]);
  }

  return target;
}
