const { Pool } = require('pg');

const pool = new Pool({
  user: 'joshuakelley',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
  max: 20, // Max number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error if a connection takes too long
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
export default pool;
