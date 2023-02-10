import { DataSource } from 'typeorm';

import config from '../config/config';
import { Roadmap } from '../entities/Roadmap';

const {
  database: {
    host, port, username, password, dbName,
  },
} = config;

export default new DataSource({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database: dbName,
  synchronize: false,
  entities: [Roadmap],
  migrations: [
    'migrations/**/*.ts',
  ],
  migrationsTableName: 'migrations',
});
