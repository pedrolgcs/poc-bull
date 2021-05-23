import { Request, Response } from 'express';

// Queues
import { add } from '../../../shared/lib/Queue';

// entities
import { User } from '../model/User';

class UsersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const user = new User(name, email, password);

    // publish
    await add('RegistrationMail', user);

    return response.status(201).json(user);
  }
}

export { UsersController };
