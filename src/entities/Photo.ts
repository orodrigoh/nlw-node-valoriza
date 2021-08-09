import { Exclude } from "class-transformer";
import {Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {v4 as uuid} from 'uuid';
import { User } from "./User";

@Entity('photos')
class Photo {

  @PrimaryColumn()
  readonly id: string;

  @Exclude()
  @Column()
  user_photo_id: string;

  @JoinColumn({name: 'user_photo_id'})
  @OneToOne(()=> User, user => user.photos)
  userPhotoId: User;

  @Column()
  url_photo: string;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;
  @Exclude()
  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export { Photo }