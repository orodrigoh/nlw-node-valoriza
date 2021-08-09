"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploader = exports.cloudinaryConfig = void 0;
var cloudinary_1 = require("cloudinary");
var config = cloudinary_1.v2.config, uploader = cloudinary_1.v2.uploader;
exports.uploader = uploader;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var cloudinaryConfig = function (request, response, next) {
    config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    });
    next();
};
exports.cloudinaryConfig = cloudinaryConfig;
