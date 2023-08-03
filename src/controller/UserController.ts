import { UserRepository } from "../repositories/UserRepository";
import { CreateUserService } from "../services/CreaUserService";
import { Request, Response } from 'express';

export default {
    async createUser(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const createUser = new CreateUserService(new UserRepository())
        const user = await createUser.execute(name, email, password)
        return response.json({ user });
    }
}