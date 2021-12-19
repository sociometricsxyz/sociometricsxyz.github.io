export const objectToUrlParams = (obj) => Object.entries(obj)
  .map(([key, val]) => `${key}=${val}`)
  .join('&');

export const objectHasProperties = (obj, keys) => {
  return keys
    .map(key => obj.hasOwnProperty(key) && !!obj[key])
    .reduce((a, b) => a && b);
}

export const fetchAndParseJson = async (path) => {
  const res = await fetch(path)
  return await res.json();
}