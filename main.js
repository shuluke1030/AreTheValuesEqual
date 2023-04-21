function areEqual(a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
  
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    const bCopy = [...b];
    for (let i = 0; i < a.length; i++) {
      const matchingIndex = bCopy.findIndex(x => areEqual(a[i], x));
      if (matchingIndex < 0) {
        return false;
      }
      bCopy.splice(matchingIndex, 1);
    }
    return true;
  }
  
  if (typeof a === 'object' && typeof b === 'object') {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    for (const key of aKeys) {
      if (!(key in b)) {
        return false;
      }
      if (!areEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  
  return a === b;
}



//const areEqual = require('lodash').isEqual;