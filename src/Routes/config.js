
import {config} from 'dotenv';

config();

const DB_USER = process.env.DB_USER || 'masaes';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PASSWORD = process.env.DB_PASSWORD || '0906jm';
const DB_DATABASE = process.env.DB_DATABASE || 'companydb';
const DB_PORT = process.env.DB_PORT || 3306;
const PORT = process.env.PORT || 3000;

export {DB_USER,DB_HOST,DB_PASSWORD,DB_DATABASE,DB_PORT,PORT};
