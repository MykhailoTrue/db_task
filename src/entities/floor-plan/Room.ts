import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Table } from './Table';

@Entity({ schema: 'floor_plan' })
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Table, (table) => table.room)
  tables: Table[];
}
