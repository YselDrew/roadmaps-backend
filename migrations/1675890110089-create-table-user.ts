import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableUser1675890110089 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
			CREATE TABLE "user" (
				id SERIAL PRIMARY KEY,
				username VARCHAR(50) NOT NULL,
				email VARCHAR(100) NOT NULL,
				hash VARCHAR NOT NULL,
				salt VARCHAR NOT NULL
			);
		`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
			DROP TABLE "user";
		`);
  }
}
