import { runSeeders } from 'typeorm-extension';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(async () => {
    await runSeeders(AppDataSource);
    console.log('Seeders have been executed successfully.');
  })
  .catch((error) => console.log(error))
  .finally(async () => await AppDataSource.destroy());
