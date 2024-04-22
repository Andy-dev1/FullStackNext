const init = (connection) => {
  //CRIAR
  const create = async (data) => {
    const conn = await connection;
    await conn.query("insert into categories (category) values (?)", data);
  };
  //REMOVER
  const remove = async (id) => {
    const conn = await connection;
    await conn.query("delete from categories where id = ? limit 1", [id]);
  };
  //UPDATE
  const update = async (id, data) => {
    const conn = await connection;
    await conn.query("update categories set category = ? where id = ?", [...data,id]);
  };
  //UPDATE
  const findAll = async () => {
    const conn = await connection;
    const [results] = await conn.query("select * from categories");
    return results
  };


  return {
    create,
    remove,
    update,
    findAll
  };
};

module.exports = init;
