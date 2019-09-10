exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits') // <<<<<<<<<<<<<<<<<<<<<<change this
    .truncate() // resets the id primary key
    .then(function() {
      // Inserts seed entries
      return knex('fruits').insert([
        // <<<<<< change table name here
        { name: 'mango', delicious: true, avgWeightOz: 8.5 },
        { name: 'papaya', delicious: true, avgWeightOz: 18.5 },
        { name: 'pineapple', delicious: true, avgWeightOz: 15.5 },
      ]);
    });
};

