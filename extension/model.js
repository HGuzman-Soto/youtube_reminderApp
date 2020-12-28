class Model {
  constructor() {
    this.id = null;
  }
  async save() {
    let table = this.constructor.name.toLowerCase() + "s";
    console.log("tables", table);
    this.id = Math.floor(Math.random() * 10000);

    let rows = await select(table);
    console.log("rows", rows);
    let found = false;
    for (let key in rows) {
      if (rows[key].id === this.id) {
        rows[key] = this;
        found = true;
      }
    }

    if (!found) {
      rows.push(this);
    }

    return save(table, rows);
  }
}
