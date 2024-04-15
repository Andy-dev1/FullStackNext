const { Database } = require("sqlite3");

const sqlite = require("sqlite3").verbose();

const initDB = (databaseFile) =>
  new Promise((resolve, reject) => {
    const db = new sqlite.Database(databaseFile, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(db);
      }
    });
  });
const run = (db, query, values) =>
  new Promise((resolve, reject) => {
    db.all(query, values, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });

const listProducts = async () => {
  const db = await initDB("banco.sqlite3");
  const catId = 8;
  const products = await run(
    db,
    `SELECT * FROM products WHERE id IN (SELECT product_id FROM categories_products WHERE category_id = ?)`,
    [catId]
  );
  console.log("Products listed: ", products);
};
listProducts().catch((err) => {
  console.log(err);
});
