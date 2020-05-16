
exports.up = async function(knex) {
  return await knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.text('model', 300).notNullable()
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('cars')
};
