import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableNode1675890150940 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			CREATE TABLE "node" (
				id SERIAL PRIMARY KEY,
				name VARCHAR(100) NOT NULL,
				roadmap_id INTEGER NOT NULL 
					REFERENCES roadmap(id),
				parent_node_id INTEGER NOT NULL
					REFERENCES node(id),
				note_id INTEGER NOT NULL
					REFERENCES note(id)
			);
		`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			DROP TABLE "node";
		`);
	}
}
