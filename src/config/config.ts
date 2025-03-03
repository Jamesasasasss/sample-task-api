import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default {
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
  },
  app: {
    port: process.env.PORT,
  },
};