import { Roadmap } from '../../entities/Roadmap';
import dataSource from '../../libs/typeorm';

export default (roadmapId: number) => {
  return dataSource
    .getRepository(Roadmap)
    .createQueryBuilder()
    .select([
      'id',
      'name',
      'description',
    ])
    .where('id = :roadmapId', { roadmapId })
    .getRawOne();
};
