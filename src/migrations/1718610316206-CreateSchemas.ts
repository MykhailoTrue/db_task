import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSchemas1718610316206 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS floor_plan`);
    await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS hr`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP SCHEMA IF EXISTS hr`);
    await queryRunner.query(`DROP SCHEMA IF EXISTS floor_plan`);
  }
}
