import dotenv from 'dotenv';
dotenv.config();

export default {
	application: {
		port: Number(process.env.APP_PORT) | 8081,
	},
	database: {
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT),
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		dbName: process.env.DB_NAME,
	},
};
