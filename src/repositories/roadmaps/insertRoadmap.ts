import { Roadmap } from "../../entities/Roadmap";
import { dataSource } from "../../libs/typeorm"; // check if this creates additional instances

export default async (data: any) => {
	return dataSource
		.getRepository(Roadmap)
		.createQueryBuilder()
		.insert()
		.values(data)
		.execute();
};
