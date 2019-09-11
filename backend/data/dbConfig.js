const knex = require('knex');  // contecting knex
const config = require('../knexfile.js')


//knex expects a config object

module.exports = knex(config.development);