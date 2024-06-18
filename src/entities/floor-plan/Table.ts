import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Room } from './Room';
import { Employee } from '../hr/Employee';

@Entity({ schema: 'floor_plan' })
export class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  room_id: number;

  @ManyToOne(() => Room, (room) => room.tables)
  @JoinColumn({ name: 'room_id' })
  room: Room;

  @OneToOne(() => Employee, (employee) => employee.table)
  employee: Employee;
}
