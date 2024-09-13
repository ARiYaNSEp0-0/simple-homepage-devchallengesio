export const pipe = (...fns) => {
  return (value) => {
    return fns.reduce((result, fn) => fn(result), value);
  };
};
