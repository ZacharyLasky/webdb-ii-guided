// changes we want to make
exports.up = function(knex) {
  // create a table called fruits
  return knex.schema.createTable('fruits', tbl => {
    // id, primary key, auto-increment, integer
    tbl.increments(); // defaults to 'id'

    // tbl.text() // or .string()
    // name: string up to 128, unique, required (not null)
    tbl
      .string('name', 128)
      .unique()
      .notNullable();

    // avgWeightOz, decimals
    tbl.decimal('avgWeightOz');

    // delicious: boolean
    tbl.boolean('delicious');
  });
};

// to revert the changes from the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
