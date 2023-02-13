import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Node {
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
	 name: 'roadmap_id',
	 type: 'integer',
	 nullable: false,
	})
  roadmapId: number;

	@Column({
	 name: 'parent_node_id',
	 type: 'integer',
	 nullable: true,
	})
  parentNodeId: number | null;

	@Column({
	 name: 'note_id',
	 type: 'integer',
	 nullable: true,
	})
  noteId: number | null;
}
