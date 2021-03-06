const storage = sessionStorage;

export function load() {
  const item = storage.getItem("answers");
  if (item === null) {
    return fetch(
      [
        window.location.origin,
        window.location.pathname.split("/")[1],
        "",
        "answers.json"
      ].join("/")
    )
      .then(r => r.json())
      .then(r => {
        storage.setItem("answers", JSON.stringify(r));
        return r;
      });
  }
  try {
    return Promise.resolve(JSON.parse(item));
  } catch (err) {
    return Promise.reject(err);
  }
}
