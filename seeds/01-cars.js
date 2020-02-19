
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // reseting the primary keys , and deleting the entries in the users data base 
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '12345678901234567', Make: '2017', Model: 'Chevy Malibu', Milage: '65,000', Trans: "New"},
        {VIN: '23456789012345671', Make: '2019', Model: 'Chevy Impala', Milage: '6,000', Trans: "New"},
        {VIN: '34567890123456712', Make: '2006', Model: 'Chevy Cruze', Milage: '15,000', Trans: "Rebuilt"}
      ]);
    });
};
