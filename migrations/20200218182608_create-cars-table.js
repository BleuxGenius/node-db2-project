
exports.up = function(knex, Promise) {
//    the change we want to make to our schema
    return knex.schema.createTable('cars', tbl => {
        tbl.increments(); // auto increments and increases 
        tbl
        .string('VIN', 17)
        .notNullable()
        .unique()
        .index();
        
        tbl
        .string('Make', 128)
        .notNullable();
        
        
        tbl
        .string('Model', 128)
        .notNullable()
        .index();

        tbl
        .string('Mileage', 6)
        .notNullable();
        

        tbl.string('Trans', 128)
        
    });
};

exports.down = function(knex, Promise ) {
//   undoing that change 
    return knex.schema.dropTableIfExists('cars');
};
