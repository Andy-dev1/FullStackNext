const db = require("./db");
const categories = require("./categories")(db);
const products = require("./products")(db);
const test = async () => {
  // await categories.create(['New category from api'])
  //await categories.remove(4)
  //await categories.update(2, ["Categoria alterada"])
  // const cats = await categories.findAll()
  // console.log(cats);
  //await products.addImage(5,['img test','url'])
  await products.updateCategories(5, [1]);
  const prods = await products.findAllPaginated({
    pageSize: 2,
    currentPage: 1,
  });
  console.log(prods);
};

test();
