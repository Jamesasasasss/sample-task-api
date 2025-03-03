import Knex from 'knex';
import config from './config/config';

export const knex = Knex({
  client: 'pg',
  connection: {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.name,
  },
});
