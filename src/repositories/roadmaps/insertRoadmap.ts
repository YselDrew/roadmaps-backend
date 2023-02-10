import { Roadmap } from '../../entities/Roadmap';
import { ICreateRoadmap } from '../../interfaces/roadmaps/createRoadmap';
import dataSource from '../../libs/typeorm'; // check if this creates additional instances

export default async (roadmap: ICreateRoadmap) => {
  return dataSource
    .getRepository(Roadmap)
    .createQueryBuilder()
    .insert()
    .values(roadmap)
    .execute();
};
