const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  connect: async () => {
    try {
      await pool.connect();
      console.log('Connected to PostgreSQL');
    } catch (err) {
      console.error('Connection error', err.stack);
    }
  }
};
