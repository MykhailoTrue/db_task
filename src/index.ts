import { AppDataSource } from './data-source';
import { Room } from './entities/floor-plan/Room';
import { Table } from './entities/floor-plan/Table';
import { Employee } from './entities/hr/Employee';

AppDataSource.initialize()
  .then(async () => {
    const tableWithRoom = await AppDataSource.getRepository(Table)
      .createQueryBuilder('table')
      .leftJoinAndSelect('table.room', 'room')
      .getMany();

    console.log('Tables with their rooms:', tableWithRoom);

    const employeesWithTables = await AppDataSource.getRepository(Employee)
      .createQueryBuilder('employee')
      .leftJoinAndSelect('employee.table', 'table')
      .getMany();

    console.log('Employees with their assigned tables:', employeesWithTables);

    const roomsWithEmployees = await AppDataSource.getRepository(Room)
      .createQueryBuilder('room')
      .leftJoinAndSelect('room.tables', 'table')
      .leftJoinAndSelect('table.employee', 'employee')
      .getMany();

    console.log('Rooms with employees:', roomsWithEmployees);
  })
  .catch((error) => console.log(error))
  .finally(async () => await AppDataSource.destroy());
