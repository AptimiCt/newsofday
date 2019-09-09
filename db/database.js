const pg = require('pg')

const config = {
    user: 'postgres',
    database: 'News',
    password: 'postgres',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
}

const pool = pg.Pool(config)

module.exports = {
    pool
};