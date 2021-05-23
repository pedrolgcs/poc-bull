import { Router } from 'express';

// routes
import { usersRouter } from '../app/Users/routes/';

const routes = Router();

// users
routes.use('/users', usersRouter);

export { routes };
