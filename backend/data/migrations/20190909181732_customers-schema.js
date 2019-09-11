
exports.up = function (knex) {
  return knex.schema.createTable('customers', tbl => {
    tbl.increments();
    tbl.text('name', 128).notNullable();
    tbl.boolean('diningin').notNullable();
    tbl.integer('dinintime');
    tbl.integer('number');
    tbl.boolean('text').notNullable();
    tbl.boolean('foodnow');
    tbl.text('date');

  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('customers')
};
