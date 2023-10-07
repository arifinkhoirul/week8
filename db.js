// Connect ke database
const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "dvdrental",
	password: "postgress123",
	port: 5432,
});

module.exports = pool;