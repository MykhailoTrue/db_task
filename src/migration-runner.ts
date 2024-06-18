import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(async () => {
    await AppDataSource.runMigrations();
    console.log('Migrations have been run successfully.');
  })
  .catch((error) => console.log(error));
