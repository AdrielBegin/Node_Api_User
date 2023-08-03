import { IUserCreate } from "../interfaces/IUserCreate";

class CreateUserService {
    constructor(
        private UserRepository: IUserCreate
    ) { }
    public async execute(name: string, email: string, password: string) {
        const user = await this.UserRepository.create(name, email, password)
        return user;
    }
}

export { CreateUserService };