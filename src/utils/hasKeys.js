export default (object, keys) => {
  const objectKeys = Object.keys(object);
  return objectKeys.every((key) => keys.includes(key));
};
