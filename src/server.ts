import 'dotenv/config';
import express, { json } from 'express';
import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';

import { queues } from './shared/lib/Queue';
import { routes } from './routes';

// inicialize
const app = express();
const { router: BullBoard } = createBullBoard(
  queues.map((queue) => new BullAdapter(queue.bull))
);

// middlewares
app.use(json());

// routes
app.use(routes);
app.use('/admin/queues', BullBoard);

const { PORT = 3333 } = process.env;

app.listen(PORT, () =>
  console.log(`🐂 server running on http://localhost:${PORT}`)
);
