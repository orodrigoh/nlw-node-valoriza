import {EntityRepository, Repository} from 'typeorm'
import { Photo } from '../entities/Photo'


@EntityRepository(Photo)
class PhotosRepositories extends Repository<Photo>{

}

export {PhotosRepositories}