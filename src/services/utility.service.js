const camelToUnderscore = (key) =>
{
  return key.replace( /([A-Z])/g, '_$1').toLowerCase();
};

const underscoreToCamel = (key) => 
{
  let newKey = key.replace( /[-_\s]+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : '';
  });
  return newKey.substr(0, 1).toLowerCase() + newKey.substr(1);
};

const toCamel = (o) => 
{
  let newO, origKey, newKey, val;
  if (o instanceof Array) {
    return o.map(function(value) {
      if (typeof value === 'object') {
        val = toCamel(value);
      }
      return val;
    });
  } else {
    newO = {};
    for (origKey in o) {
      if (Object.prototype.hasOwnProperty.call(o, origKey)) {
        newKey = underscoreToCamel(origKey);
        val = o[origKey];
        if (val instanceof Array || (val !== null && val.constructor === Object)) {
          val = toCamel(val);
        }
        newO[newKey] = val;
      }
    }
  }
  return newO;
};

export {
  camelToUnderscore,
  underscoreToCamel,
  toCamel,
};