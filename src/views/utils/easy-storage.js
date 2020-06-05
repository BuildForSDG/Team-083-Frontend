const get = (item) => {
  return JSON.parse(localStorage.getItem(item));
};

const set = (item, value) => {
  JSON.stringify(localStorage.setItem(item, value));
};

module.exports = {
  get,
  set
};
