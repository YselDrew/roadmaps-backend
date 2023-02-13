import { Node } from '../../entities/Node';
import { ICreateNode } from '../../interfaces/roadmaps/createNode';
import dataSource from '../../libs/typeorm'; // check if this creates additional instances

export default async (node: ICreateNode) => {
  return dataSource
    .getRepository(Node)
    .createQueryBuilder()
    .insert()
    .values(node)
    .execute();
};
