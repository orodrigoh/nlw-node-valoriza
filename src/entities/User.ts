import {Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn} from "typeorm";
import {v4 as uuid} from 'uuid'
import {Exclude } from 'class-transformer'
import { Photo } from "./Photo";

@Entity('users')
class User {

  @PrimaryColumn()
  readonly id: string;
  @Column()
  name: string;
  @Column()
  email: string;

  @OneToOne(type => Photo, photos => photos.userPhotoId)
  photos: Photo;

  @Exclude()
  @Column()
  password: string;

  @Column()
  admin: boolean;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export { User }