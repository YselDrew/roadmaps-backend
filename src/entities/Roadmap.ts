import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Roadmap {
	@PrimaryGeneratedColumn('increment', { name: 'id', type: 'integer' })
	id: number;

	@Column({
		name: 'name',
		type: 'varchar',
		nullable: false,
		length: 100,
	})
	name: string;

	@Column({
		name: 'description',
		type: 'text',
		nullable: false,
	})
	description: string;
}
