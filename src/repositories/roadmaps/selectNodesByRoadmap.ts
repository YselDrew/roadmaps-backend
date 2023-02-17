
import { Roadmap } from '../../entities/Roadmap';
import dataSource from '../../libs/typeorm';

export default (roadmapId: number) => {
  return dataSource
    .getRepository(Node)
    .createQueryBuilder()
    .select([
      'id',
      'name',
      'description',
    ])
    .where('roadmap_id = :roadmapId', { roadmapId })
    .andWhere('node.parent_node_id IS NULL')
    .getRawOne();
};
