import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Table } from '../floor-plan/Table';

@Entity({ schema: 'hr' })
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  table_id: number;

  @OneToOne(() => Table, (table) => table.employee)
  @JoinColumn({ name: 'table_id' })
  table: Table;
}
