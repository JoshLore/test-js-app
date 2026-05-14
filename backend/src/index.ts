import express, { Request, Response } from 'express';
import { query } from './db';


const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', async (req: Request, res: Response) => {
    try {
        const result = await query('SELECT * FROM example_db.test_table');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Broken server');
    }
});

app.post('/', (req: Request, res: Response) => {
  res.send('Made a post!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
