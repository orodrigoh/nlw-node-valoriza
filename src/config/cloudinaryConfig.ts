import {Request, Response, NextFunction} from "express";
import { v2 } from "cloudinary"

const {config, uploader} = v2;

import dotenv from 'dotenv';
dotenv.config();

const cloudinaryConfig = (request: Request, response: Response, next:NextFunction) => {
  config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });
  next()
}

export { cloudinaryConfig, uploader}