import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Room } from '../entities/floor-plan/Room';
import { Table } from '../entities/floor-plan/Table';
import { Employee } from '../entities/hr/Employee';

export class MainSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<void> {
    const roomRepository = dataSource.getRepository(Room);
    const tableRepository = dataSource.getRepository(Table);
    const employeeRepository = dataSource.getRepository(Employee);

    const rooms = await Promise.all(
      Array(5)
        .fill(0)
        .map(async (_, index) => {
          const room = roomRepository.create({ name: `Room ${index + 1}` });
          return await roomRepository.save(room);
        })
    );

    const tables = await Promise.all(
      rooms.flatMap((room) =>
        Array(3)
          .fill(0)
          .map(async (_, index) => {
            const table = tableRepository.create({
              name: `Table ${room.id}-${index + 1}`,
              room: room,
            });
            return await tableRepository.save(table);
          })
      )
    );

    await Promise.all(
      tables.map(async (table, index) => {
        const employee = employeeRepository.create({
          name: `Employee ${index + 1}`,
          table: table,
        });
        return await employeeRepository.save(employee);
      })
    );
  }
}
