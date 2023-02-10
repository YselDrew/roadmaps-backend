import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableNote1675890143313 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			CREATE TABLE "note" (
				id SERIAL PRIMARY KEY,
				description TEXT
			);
		`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			DROP TABLE "note";
		`);
	}
}
