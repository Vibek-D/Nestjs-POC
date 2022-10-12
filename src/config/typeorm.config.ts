import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  port: parseInt(<string>process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  entities: [__dirname + '//*.entity{.ts,.js}'],
  migrations: [__dirname + '/database/migrations//*{.ts,.js}'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
