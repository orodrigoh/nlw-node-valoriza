import multer from 'multer'
import {resolve, extname } from 'path'
import DatauriParser from 'datauri/parser'
import { request } from 'express';
  //**** For own server ****
  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, resolve(__dirname, '..', '..', 'uploads' ))
  //   },
  //   filename: function (req, file, cb) {
  //     const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1E9)}${extname(file.originalname)}`;
  //     cb(null, uniqueSuffix)
  //   }
  // })
  
  const storage = multer.memoryStorage();

  function fileFilter (req, file, cb) {
    let ext = extname(file.originalname.toLowerCase());
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
    cb(new Error("File type is not supported"), false);
    return;
    } cb(null,true)
  }

  const parser = new DatauriParser();


export const upload = multer({ storage: storage, fileFilter }).single('image')

export const dataUri = req => parser.format(extname(req.file.originalname).toString().toLowerCase(), req.file.buffer)