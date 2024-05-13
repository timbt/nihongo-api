import express, {Express, Request, Response} from 'express';
import 'dotenv/config';

const app: Express = express();

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
