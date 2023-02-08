import { MigrationInterface, QueryRunner } from "typeorm"

export class createTableUserRoadmap1675894169403 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			CREATE TABLE "user_roadmap" (
				user_id INTEGER NOT NULL
					REFERENCES "user"(id),
				roadmap_id INTEGER NOT NULL 
					REFERENCES roadmap(id)
			);
		`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			DROP TABLE "user_roadmap";
		`)
	}
}
