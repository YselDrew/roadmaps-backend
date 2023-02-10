import { Roadmap } from '../../entities/Roadmap';
import dataSource from '../../libs/typeorm';

export default () => {
  return dataSource
    .getRepository(Roadmap)
    .createQueryBuilder()
    .select([
      'id',
      'name',
      'description',
    ])
    .getRawMany();
};
