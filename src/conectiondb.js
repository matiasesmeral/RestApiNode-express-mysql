import { createPool } from "mysql2/promise";
import * as con from './Routes/config.js';

export const pool = createPool({
  host: con.DB_HOST,
  user: con.DB_USER,
  password: con.DB_PASSWORD,
  port: con.DB_PORT,
  database: con.DB_DATABASE
})
