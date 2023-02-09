import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableRoadmap1675890136440 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			CREATE TABLE "roadmap" (
				id SERIAL PRIMARY KEY,
				name VARCHAR(100) NOT NULL,
				description TEXT NOT NULL
			);
		`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
    	DROP TABLE "roadmap";
		`);
	}
}
