
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, model: 'GTR'},
        {id: 2, model: 'Mustang'},
        {id: 3, model: 'Impala'}
      ]);
    });
};
