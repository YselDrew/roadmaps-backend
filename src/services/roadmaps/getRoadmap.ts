import selectRoadmap from "../../repositories/roadmaps/selectRoadmap"

export default (roadmapId: number) => {
  return selectRoadmap(roadmapId);
}
