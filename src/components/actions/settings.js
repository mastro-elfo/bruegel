const storage = localStorage;

function _id(id) {
  return `set-${id}`;
}

export function get(id, parse = v => v) {
  return parse(storage.getItem(_id(id)));
}

export function set(id, value) {
  storage.setItem(_id(id), value);
}
