import { Router } from 'express';

// controllers
import { UsersController } from '../controllers/UsersController';

// inicialize
const usersController = new UsersController();

const usersRouter = Router();

usersRouter.post('/', usersController.store);

export { usersRouter };
