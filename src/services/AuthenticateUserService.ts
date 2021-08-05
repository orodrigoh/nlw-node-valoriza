import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories';


interface ITagRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({email, password}: ITagRequest) {
    const userRepository = getCustomRepository(UsersRepositories);

    const user = await userRepository.findOne({
      email
    })
    
    if(!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMath = await compare(password, user.password);

    if(!passwordMath) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign(
      {
        email: user.email
      },"5458774ba4b590af04af2d8abc01f9c1", {
        subject: user.id,
        expiresIn: "1d"
      }

    );
    return token;
  }
}

export { AuthenticateUserService }