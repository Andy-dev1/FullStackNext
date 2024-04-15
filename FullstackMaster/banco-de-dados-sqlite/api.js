const categories=require('./categories')('./banco.sqlite3');
const products=require('./products')('./banco.sqlite3');
const test= async()=>{
    //await categories.create([7,'xczxczx']);
    //await categories.remove(18);
    //await categories.update(8,['updated'])
    //const cats = await categories.findAll();
    // const cats = await categories.findAllPaginated({pageSize:2,currentPage:4});
    // console.log(cats);
    //await products.create([1,'test',90]);
    // await products.update(1,['new test',60]);
    //await products.remove(1);
    //await products.create([4,'janta',110]);
    //await products.addImage(4,[3,'https//janta','janta']);
    //await products.addImage(4,[4,'https//janta 2','janta 2']);
    //const product = await products.findAll();
    const product = await products.findAllPaginated({pageSize:2,currentPage:1});
    await products.updateCategories(1,[1]);
    console.log(product);
}
test();