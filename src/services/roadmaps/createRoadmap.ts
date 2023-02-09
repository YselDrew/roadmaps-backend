import insertRoadmap from "../../repositories/roadmaps/insertRoadmap";

export default async (roadmap: any) => {
	return insertRoadmap(roadmap);
};
