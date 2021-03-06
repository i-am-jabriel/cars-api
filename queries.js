// loads the data from .env and stores it to procces.env
const dotenv = require('dotenv');
dotenv.config();

const Pool = require('pg').Pool;

// destructure keys from our local .env so our passwords are not stored on github
const { PSQL_HOST, PSQL_USER, PSQL_PASS, PSQL_DB, PSQL_PORT } = process.env;

// create a connection to our database
const pool = new Pool({
    user: PSQL_USER,
    password: PSQL_PASS,
    database: PSQL_DB,
    host: PSQL_HOST,
    port: PSQL_PORT
});

const getAllVehicles = (req, res) => {
    pool.query('SELECT * FROM Vehicles;')
        .then(results => {
            res.status(200).json(results.rows);
        })
        .catch(error => {
            throw error;
        })
}

module.exports = {
    getAllVehicles
}