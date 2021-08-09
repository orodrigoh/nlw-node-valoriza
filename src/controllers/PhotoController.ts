import {Request, Response} from 'express'
import { cloudinaryConfig, uploader } from '../config/cloudinaryConfig'
import { dataUri } from '../config/multerConfig'
import { CreateUserPhotoService } from '../services/CreateUserPhotoService';


class PhotoController {

  async handle(request:Request, response: Response) {

    const {user_id} = request;
    const folder = request.path.split('/',3)[2]
    if(!request.file){
        throw new Error('Choose a picture to upload')
    }
     if(request.file){
         const file = dataUri(request).content
         const result = await uploader.upload(file,{
             folder:`MobiHub/${folder}`,
             width: 300,
             height:300,
             crop:'fill',
             gravity: "faces"
         })
         const url_photo  = result.secure_url

         const createUserPhotoService = new CreateUserPhotoService()

         const photo = await createUserPhotoService.execute({user_photo_id:user_id, url_photo})

         response.json(photo) 
     }  
  }

}

export {PhotoController}