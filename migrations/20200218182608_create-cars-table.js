
exports.up = function(knex) {
//    the change we want to make to our schema
    return knex.schema.createTable('cars', tbl => {
        tbl.increments(); // auto increments and increases 
        tbl
        .string('VIN', 17)
        .notNullable()
        .index()
        
        tbl
        .string('Make', 128)
        .notNullable()
        
        
        tbl
        .string('Model', 128)
        .notNullable()
        .index()

        tbl
        .string('Milage', 9)
        .notNullable()
        

        tbl.string('Trans', 128)
        
    });
};

exports.down = function(knex) {
//   undoing that change 
    return knenx.schema.dropTableIfExists('cars');
};
