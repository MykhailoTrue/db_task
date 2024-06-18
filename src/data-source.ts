import { DataSource, DataSourceOptions } from 'typeorm';
import dotenv from 'dotenv';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './seeders/main.seeder';
dotenv.config();

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(options);
