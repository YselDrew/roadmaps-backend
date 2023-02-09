import express, { Express } from 'express';

import { config } from './config/config';
import { routes } from './routes/routes';
const { application: { port } } = config;

import { dataSource } from './libs/typeorm';

const app: Express = express();

(async () => {
	dataSource.initialize();

	routes(app);

	app.listen(port, () => { console.log(`Server is running on port ${port}`); });
})();
