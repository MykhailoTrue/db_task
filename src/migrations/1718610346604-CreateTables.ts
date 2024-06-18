import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1718610346604 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE floor_plan.room (
                id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL
            )
        `);

    await queryRunner.query(`
            CREATE TABLE floor_plan.table (
                id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                room_id INT,
                FOREIGN KEY (room_id) REFERENCES floor_plan.room(id)
            )
        `);

    await queryRunner.query(`
            CREATE TABLE hr.employee (
                id SERIAL PRIMARY KEY,
                name VARCHAR NOT NULL,
                table_id INT UNIQUE,
                FOREIGN KEY (table_id) REFERENCES floor_plan.table(id)
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS hr.employee`);
    await queryRunner.query(`DROP TABLE IF EXISTS floor_plan.table`);
    await queryRunner.query(`DROP TABLE IF EXISTS floor_plan.room`);
  }
}
