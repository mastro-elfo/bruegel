const storage = localStorage;

export function get() {
  try {
    return JSON.parse(storage.getItem("guesses")) || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

export function set(guesses) {
  storage.setItem("guesses", JSON.stringify(guesses));
}

export function reset() {
  set([]);
}
