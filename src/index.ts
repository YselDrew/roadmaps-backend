import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 8081;

app.listen(port, () => { console.log(`Server is running on port ${port}`); });

app.get('/health', (_req: Request, res: Response) => {
	res.json({ status: 'OK' });
});
