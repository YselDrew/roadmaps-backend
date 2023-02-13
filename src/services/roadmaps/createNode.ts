import { ICreateNode } from '../../interfaces/roadmaps/createNode';
import insertNode from '../../repositories/roadmaps/insertNode';

export default async (node: ICreateNode) => {
  return insertNode(node);
};