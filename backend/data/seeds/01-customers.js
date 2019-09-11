
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('customers').truncate() //<---itll start id at 1
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {
          name: 'roger', diningin: false, dinintime: null,
          number: 3236376776, text: true, foodnow: true,
          date: "10/15/2009"
        },
        {
          name: 'candy', diningin: true, dinintime: 630,
          number: 3236376776, text: false, foodnow: false,
          date: "10/15/2019"
        }
      ]);
    });
};
