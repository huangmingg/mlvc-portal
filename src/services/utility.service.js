const camelToUnderscore = (key) =>
{
  return key.replace( /([A-Z])/g, '_$1').toLowerCase();
};

export {
  camelToUnderscore,
};