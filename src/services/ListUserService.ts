import { createQueryBuilder, getConnection, getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";
import {classToPlain } from "class-transformer"
import { Photo } from "../entities/Photo";

class ListUserService {
  async execute() {
    
    const usersRepositories = getCustomRepository(UsersRepositories);

    // const users = await (await usersRepositories.find()).join({});
    const users = await usersRepositories.createQueryBuilder("users")
    .leftJoinAndSelect("users.photos", "photos")
    .getMany();
    
    return classToPlain(users);
  }
}

export {ListUserService}