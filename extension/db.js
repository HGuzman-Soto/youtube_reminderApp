// function init(cb) {
//   chrome.storage.local.get(["store"], (result) => {
//     if (result.store) {
//       store = result.store;
//       console.log("store");
//     }
//     console.log("cb?");

//     cb();
//   });
// }

async function save() {
  return await chrome.storage.local.set({
    store: store,
  });
}

async function select(table) {
  return new Promise((rs, rj) => {
    chrome.storage.local.get([table], (res) => {
      if (!(table in res)) {
        return rs([]);
      }

      return rs(res[table]);
    });
  });
}

async function save(table, rows) {
  return new Promise((rs, rj) => {
    chrome.storage.local.set(
      {
        [table]: rows,
      },
      rs
    );
  });
}

async function drop(table) {
  return save(table, []);
}
