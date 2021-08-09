import { getCustomRepository } from "typeorm"
import { PhotosRepositories } from "../repositories/PhotosRepositories"

interface IPhotoRequest {
  user_photo_id:string;
  url_photo: string;
}

class CreateUserPhotoService {

  async execute({user_photo_id, url_photo}:IPhotoRequest) {
    const photoRepositories = getCustomRepository(PhotosRepositories);

    
    const photo = photoRepositories.create({
      user_photo_id,
      url_photo
    });

    await photoRepositories.save(photo)
    return photo;
    
  }
}

export {CreateUserPhotoService}