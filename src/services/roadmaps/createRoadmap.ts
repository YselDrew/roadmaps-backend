import { ICreateRoadmap } from '../../interfaces/roadmaps/createRoadmap';
import insertRoadmap from '../../repositories/roadmaps/insertRoadmap';

export default async (roadmap: ICreateRoadmap) => {
  return insertRoadmap(roadmap);
};
